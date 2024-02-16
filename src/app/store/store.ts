import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from '@/entities/book';

const store = configureStore({
  reducer: bookReducer,
});

export { store };
