import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  background-color: #f7e2e9;
`;

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AppNameView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  padding: 0 20px;
`;

export const AppName = styled.Text`
  font-size: 40px;
  color: #fff;
`;

export const LoginContainer = styled.View`
  margin-top: 50px;
  width: 100%;
  padding: 0 10px;
`;
export const InputView = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  padding: 10px;
`;
export const FieldName = styled.Text`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  margin-left: 5px;
`;
export const InputText = styled.TextInput`
  color: #ffffff;
  font-size: 16px;
  top: 0px;
  height: 40px;
  padding: 0 5px;
  width: 100%;
`;

export const Entrar = styled.TouchableOpacity`
  height: 36px;
  width: 85px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 44px;
`;
export const TextBotao = styled.Text`
  color: #b22e6f;
  font-weight: 500;
  font-size: 16px;
`;
