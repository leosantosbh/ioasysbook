import {DefaultRootState} from 'react-redux';

export interface UserData {
  name: string;
  email: string;
  birthdate: string;
  gender: string;
  id: string;
}

interface StateUser {
  user: string;
  pass: string;
  userData: UserData;
}

interface StateAuth {
  token: string;
  refreshToken: string;
  loading: boolean;
  signed: boolean;
}

export interface StateApp extends DefaultRootState {
  user: StateUser;
  auth: StateAuth;
}
