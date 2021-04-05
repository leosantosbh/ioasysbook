/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-yield */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */
import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';
import { saveUserData } from '../user/actions';
import { loginSuccess, logoutRequest } from './actions';

interface PayloadLogin {
  payload: {
    user: string;
    pass: string;
  };
}

interface PayloadNewToken {
  payload: {
    token: string;
    refreshToken: string;
  };
}

interface PayloadToken {
  payload: {
    token: string;
  };
}

export function* signIn({ payload }: PayloadLogin) {
  try {
    const { user, pass } = payload;

    const response = yield call(api.post, '/auth/sign-in', { email: user, password: pass });
  
    const dataUser = response.data;
  
    const refreshToken = response.headers['refresh-token'];
  
    const { authorization } = response.headers;

    if (refreshToken && authorization && dataUser) {
      api.defaults.headers.Authorization = `Baerer ${authorization}`;
      yield put(saveUserData(dataUser));
      yield put(loginSuccess(authorization, refreshToken));
    } else {
      Alert.alert('Erro na autenticação', 'Usuário e/ou senha inválido!')
      yield put(logoutRequest());
    }
  } catch {
    Alert.alert('Erro na autenticação', 'Usuário e/ou senha inválido!')
    yield put(logoutRequest());
  }
}

export function* newToken({ payload }: PayloadNewToken) {
  try {
    const { refreshToken, token } = payload;

    const response = yield call(api.post, '/auth/refresh-token', { refreshToken }, { headers: { authorization: `Bearer ${token}` }});

    const refresh = response.headers['refresh-token'];
    const { authorization } = response.headers;

    if (refreshToken && authorization) {
      api.defaults.headers.Authorization = `Baerer ${authorization}`;
      yield put(loginSuccess(authorization, refresh));
    } else {
      Alert.alert('Atenção', 'Acesso expirou, faça login novamente!')
      yield put(logoutRequest());
    }
  } catch {
    Alert.alert('Atenção', 'Acesso expirou, faça login novamente!')
    yield put(logoutRequest());
  }
}

export function setToken({ payload }: PayloadToken) {
  if (!payload) {
    return;
  }
  const { token } = payload;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest<any>('persist/REHYDRATE', setToken),
  takeLatest<any>('@auth/newToken', newToken),
  takeLatest<any>('@auth/loginRequest', signIn),
]);
