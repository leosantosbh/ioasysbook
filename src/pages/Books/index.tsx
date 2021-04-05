/* eslint-disable no-lonely-if */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../../store/modules/auth/actions';
import { ContainerApp } from '../global.styles';
import {
  HeaderApp,
  AppNameView,
  AppName,
  SairButton,
  ListaBooks,
  BotaoCard,
  BookImg,
  InfoBook,
  TopBookInfo,
  TituloBook,
  AutoresBook,
  DownBookInfo,
  DownBookText,
} from './styles';
import { api, DataBooksProps } from '../../services/api';
import { StateApp } from '../../store/models.types';
import { maskNoImage } from '../../assets';



interface ConfigBooksProps {
  totalPages: number | null;
  totalItems: number | null;
}

const Books: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const signed = useSelector((state: StateApp) => state.auth.signed);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [configBooks, setConfigBooks] = useState<ConfigBooksProps>({
    totalPages: null,
    totalItems: null,
  });
  const [dataBooks, setDataBooks] = useState<DataBooksProps[]>([]);

  const handleSair = () => {
    dispatch(logoutRequest());
  };

  const handleBooks = async (refresh: boolean) => {
    if (refresh) {
      setLoading(true);
      setPage(1);
      const { data } = await api.get(`/books?page=1&amount=20`);

      setConfigBooks({
        totalPages: data.totalPages,
        totalItems: data.totalItems,
      });

      setDataBooks(data.data);
      setLoading(false);
    } else {
      if (page !== configBooks.totalPages) {
        setPage(page + 1);
        const { data } = await api.get(`/books?page=${page + 1}&amount=20`);
  
        setConfigBooks({
          totalPages: data.totalPages,
          totalItems: data.totalItems,
        });
  
        setDataBooks([...dataBooks, ...data.data]);
      }
    }
  };

  useEffect(() => {
    if (signed) {
      setTimeout(() => handleBooks(false), 3000);
    }
  }, []);

  const keyExtractor = useCallback(item => item.id, []);

  const renderItens = useCallback(
    ({ item }) => (
      <BotaoCard
        onPress={() => navigation.navigate('BookDetail', item.id )}>
          {item.imageUrl ? (
            <BookImg source={{ uri: item.imageUrl }} />
          ) : (
            <BookImg source={maskNoImage} />
          )}
        <InfoBook>
          <TopBookInfo>
            <TituloBook>{item.title}</TituloBook>
            <AutoresBook>{item.authors.join(', ')}</AutoresBook>
          </TopBookInfo>
          <DownBookInfo>
            <DownBookText>{`${item.pageCount} páginas`}</DownBookText>
            <DownBookText>{`Editora ${item.publisher}`}</DownBookText>
            <DownBookText>{`Publicado em ${item.published}`}</DownBookText>
          </DownBookInfo>
        </InfoBook>
      </BotaoCard>
    ),
    [],
  );

  return (
    <ContainerApp>
      <HeaderApp>
        <AppNameView>
          <AppName style={{ fontWeight: 'bold' }}>ioasys</AppName>
          <AppName style={{ fontSize: 35, marginLeft: 20 }}>Books</AppName>
        </AppNameView>
        <SairButton onPress={handleSair}>
          <Icon name="log-out" size={25} color="#333333" />
        </SairButton>
      </HeaderApp>
      {dataBooks.length > 1 ? (
        <ListaBooks
          data={dataBooks}
          keyExtractor={keyExtractor}
          renderItem={renderItens}
          onEndReached={() => handleBooks(false)}
          onEndReachedThreshold={0.1}
          refreshing={loading}
          onRefresh={() => handleBooks(true)}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#b22e6f" />
        </View>
      )}
    </ContainerApp>
  );
};

export default Books;
