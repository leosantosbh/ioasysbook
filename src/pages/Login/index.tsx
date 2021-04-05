import React, { useState } from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundLogin } from '../../assets';
import {
  Container,
  AppNameView,
  AppName,
  LoginContainer,
  InputView,
  FieldName,
  InputText,
  KeyboardView,
  Entrar,
  TextBotao,
} from './styles';
import { loginRequest } from '../../store/modules/auth/actions';
import { StateApp } from '../../store/models.types';

const Login: React.FC = () => {
  const loading = useSelector((state: StateApp) => state.auth.loading);
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState('desafio@ioasys.com.br');
  const [senha, setSenha] = useState('12341234');

  const handleLogin = () => {
    dispatch(loginRequest(usuario, senha));
  };

  return (
    <Container source={BackgroundLogin}>
      <KeyboardView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <AppNameView>
          <AppName style={{ fontWeight: 'bold' }}>ioasys</AppName>
          <AppName style={{ fontSize: 35, marginLeft: 20 }}>Books</AppName>
        </AppNameView>
        <LoginContainer>
          <InputView>
            <FieldName>Email</FieldName>
            <InputText
              keyboardType="email-address"
              value={usuario}
              onChangeText={e => setUsuario(e)}
            />
          </InputView>
          <InputView
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{ flex: 1 }}>
              <FieldName>Senha</FieldName>
              <InputText
                secureTextEntry
                value={senha}
                onChangeText={e => setSenha(e)}
              />
            </View>
            <Entrar onPress={handleLogin}>
              {loading ? (
                <ActivityIndicator color="#b22e6f" />
              ) : (
                <TextBotao>Entrar</TextBotao>
              )}
            </Entrar>
          </InputView>
        </LoginContainer>
      </KeyboardView>
    </Container>
  );
};

export default Login;
