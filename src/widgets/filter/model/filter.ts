import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

type FilterState = {
  title: string;
  author: string;
  isFavorite: boolean;
};

const initialState: FilterState = {
  title: '',
  author: '',
  isFavorite: false,
};

const filterModel = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    setOnlyFavoriteFilter: (state) => {
      state.isFavorite = !state.isFavorite;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setTitleFilter, setAuthorFilter, setOnlyFavoriteFilter, resetFilters } =
  filterModel.actions;

export const selectTitleFilter = (state: RootState) => state.filter.title;
export const selectAuthorFilter = (state: RootState) => state.filter.author;
export const selectOnlyFavoriteFilter = (state: RootState) => state.filter.isFavorite;

export { filterModel };
