import { createSlice } from '@reduxjs/toolkit';
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
    setTitleFilter: (state, action) => (state.title = action.payload),
  },
});

export const { setTitleFilter } = filterModel.actions;

export const selectTitleFitler = (state: RootState) => state.filter.title;

export { filterModel };
