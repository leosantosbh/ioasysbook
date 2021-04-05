import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const HeaderApp = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const AppNameView = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const AppName = styled.Text`
  font-size: 40px;
  color: #000;
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

export const ListaBooks = styled.FlatList``;

export const BotaoCard = styled.TouchableOpacity`
  width: ${`${width - 40}px `};
  height: 160px;
  background-color: #fff;
  border-radius: 4px;
  margin: 10px 20px 10px 20px;
  padding: 15px;
  flex-direction: row;
`;
export const BookImg = styled.Image`
  width: 90px;
  height: 130px;
  resize-mode: contain;
`;
export const InfoBook = styled.View`
  width: 70%;
  padding-left: 20px;
  justify-content: space-between;
  padding-bottom: 3px;
`;

export const TopBookInfo = styled.View``;

export const TituloBook = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  font-weight: 700;
`;
export const AutoresBook = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #ab2680;
`;

export const DownBookInfo = styled.View``;

export const DownBookText = styled.Text`
  color: #999999;
  font-size: 12px;
`;
