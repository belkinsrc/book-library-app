import { configureStore } from '@reduxjs/toolkit';
import { bookModel } from '@/entities/book';
import { filterModel } from '@/widgets/filter';

const store = configureStore({
  reducer: {
    books: bookModel.reducer,
    filter: filterModel.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
