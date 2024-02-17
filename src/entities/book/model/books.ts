import { BookType } from '@/shared/api';
import { createSlice } from '@reduxjs/toolkit';

type BooksState = Array<BookType>;

const initialState: BooksState = [];

const bookModel = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    deleteBook: (state, action) => state.filter((book) => book.id !== action.payload),
    toggleFavoriteBook: (state, action) => {
      return state.map((book) =>
        book?.id !== action.payload ? book : { ...book, isFavorite: !book?.isFavorite },
      );
    },
  },
});

export const { addBook, deleteBook, toggleFavoriteBook } = bookModel.actions;

export { bookModel };
