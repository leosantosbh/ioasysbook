import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const HeaderApp = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
`;

export const SairButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 1px;
  border-color: rgba(51, 51, 51, 0.2);
  justify-content: center;
  align-items: center;
`;

export const BookImg = styled.Image`
  margin: 20px 0px;
  width: ${`${width - 80}px `};
  height: 420px;
  resize-mode: stretch;
`;
export const InfoBook = styled.View`
  padding: 0 20px;
  width: 100%;
`;

export const TopBookInfo = styled.View``;

export const TituloBook = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 28px;
  font-weight: 700;
`;
export const AutoresBook = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-top: 5px;
  color: #ab2680;
`;

export const DownBookInfo = styled.View`
  margin-top: 7px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DownBookItem = styled.Text`
  color: #000;
  font-size: 12px;
`;

export const DownBookText = styled.Text`
  color: #999;
  font-size: 12px;
`;

export const Resenha = styled.Text`
  margin-top: 20px;
  color: #999999;
`;
