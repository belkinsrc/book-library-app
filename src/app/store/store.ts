import { configureStore } from '@reduxjs/toolkit';
import { bookModel } from '@/entities/book';

const store = configureStore({
  reducer: {
    books: bookModel.reducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;

export { store };
