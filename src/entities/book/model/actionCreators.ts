import { BookType } from '@/shared/api';
import * as actionTypes from './actionTypes';

function addBook(newBook: BookType) {
  return {
    type: actionTypes.ADD_BOOK,
    payload: newBook,
  };
}

function deleteBook(id: string) {
  return {
    type: actionTypes.DELETE_BOOK,
    payload: id,
  };
}

export { addBook, deleteBook };
