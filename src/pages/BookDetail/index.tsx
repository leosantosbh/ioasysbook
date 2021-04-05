/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Platform, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ContainerApp } from '../global.styles';
import {
  AutoresBook,
  BookImg,
  DownBookInfo,
  DownBookItem,
  DownBookText,
  HeaderApp,
  InfoBook,
  SairButton,
  TituloBook,
  TopBookInfo,
  Resenha,
} from './styles';
import { api, DataBooksProps } from '../../services/api';

const BookDetail: React.FC = () => {
  const navigation = useNavigation();
  const { params: idBook } = useRoute();
  const [bookDetail, setBookDetail] = useState<DataBooksProps>();

  const handleBookDetalhes = async () => {
    const { data } = await api.get(`/books/${idBook}`);

    setBookDetail(data);
  };

  useEffect(() => {
    if (idBook) {
      handleBookDetalhes();
    }
  }, []);

  return (
    <ContainerApp>
      <HeaderApp>
        <SairButton onPress={() => navigation.goBack()}>
          <Icon name="x" size={25} color="#333333" />
        </SairButton>
      </HeaderApp>
      {bookDetail ? (
        <ScrollView
          style={{ paddingHorizontal: 25 }}
          contentContainerStyle={{
            paddingBottom: Platform.OS === 'ios' ? 0 : 30,
          }}>
          {bookDetail.imageUrl && (
            <View style={{ width: '100%', alignItems: 'center' }}>
              <BookImg source={{ uri: bookDetail.imageUrl }} />
            </View>
          )}
          <InfoBook>
            <TopBookInfo>
              <TituloBook>{bookDetail.title}</TituloBook>
              <AutoresBook>{bookDetail.authors.join(', ')}</AutoresBook>
            </TopBookInfo>
            <DownBookInfo style={{ marginTop: 30 }}>
              <DownBookItem>INFORMAÇÃO</DownBookItem>
            </DownBookInfo>
            <DownBookInfo>
              <DownBookItem>Páginas</DownBookItem>
              <DownBookText>{`${bookDetail.pageCount} páginas`}</DownBookText>
            </DownBookInfo>
            <DownBookInfo>
              <DownBookItem>Editora</DownBookItem>
              <DownBookText>{`Editora em ${bookDetail.publisher}`}</DownBookText>
            </DownBookInfo>
            <DownBookInfo>
              <DownBookItem>Publicação</DownBookItem>
              <DownBookText>{bookDetail.published}</DownBookText>
            </DownBookInfo>
            <DownBookInfo>
              <DownBookItem>Idioma</DownBookItem>
              <DownBookText>{bookDetail.language}</DownBookText>
            </DownBookInfo>
            <DownBookInfo>
              <DownBookItem>Título Original</DownBookItem>
              <DownBookText>{bookDetail.title}</DownBookText>
            </DownBookInfo>
            <DownBookInfo>
              <DownBookItem>ISBN-10</DownBookItem>
              <DownBookText>{bookDetail.isbn10}</DownBookText>
            </DownBookInfo>
            <DownBookInfo>
              <DownBookItem>ISBN-13</DownBookItem>
              <DownBookText>{bookDetail.isbn13}</DownBookText>
            </DownBookInfo>
          </InfoBook>
          <InfoBook style={{ marginTop: 30 }}>
            <DownBookItem>RESENHA DA EDITORA</DownBookItem>
            <Resenha>{bookDetail.description}</Resenha>
          </InfoBook>
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#b22e6f" />
        </View>
      )}
    </ContainerApp>
  );
};

export default BookDetail;
