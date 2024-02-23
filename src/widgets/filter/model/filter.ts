import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

type FilterState = {
  title: string;
  author: string;
};

const initialState: FilterState = {
  title: '',
  author: '',
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
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setTitleFilter, setAuthorFilter, resetFilters } = filterModel.actions;

export const selectTitleFitler = (state: RootState) => state.filter.title;
export const selectAuthorFilter = (state: RootState) => state.filter.author;
export const selectFilter = (state: RootState) => state.filter;

export { filterModel };
