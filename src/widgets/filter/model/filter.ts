import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

type FilterState = {
  title: string;
};

const initialState: FilterState = {
  title: '',
};

const filterModel = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setTitleFilter, resetFilters } = filterModel.actions;

export const selectTitleFitler = (state: RootState) => state.filter.title;

export { filterModel };
