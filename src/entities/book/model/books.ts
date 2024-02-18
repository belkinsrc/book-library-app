import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BookType } from '@/shared/api';
import { RootState } from '@/app/store';

type BooksState = Array<BookType>;

const initialState: BooksState = [];

const bookModel = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookType>) => {
      state.push(action.payload);
    },
    deleteBook: (state, action: PayloadAction<string>) =>
      state.filter((book) => book.id !== action.payload),
    toggleFavoriteBook: (state, action: PayloadAction<string>) => {
      return state.map((book) =>
        book?.id !== action.payload ? book : { ...book, isFavorite: !book?.isFavorite },
      );
    },
  },
});

export const { addBook, deleteBook, toggleFavoriteBook } = bookModel.actions;

export const selectBooks = (state: RootState) => state.books;

export { bookModel };
