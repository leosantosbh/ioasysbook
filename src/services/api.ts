import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
});

export interface DataBooksProps {
  authors: string[];
  title: string;
  description: string;
  pageCount: number;
  category: string;
  imageUrl: string;
  language: string;
  isbn10: string;
  isbn13: string;
  publisher: string;
  published: number;
  id: string;
}
