import { BookType } from '@/shared/api';
import * as actionTypes from './actionTypes';

interface ActionType {
  type: string;
  payload?: BookType;
}

const initialState: Array<BookType | undefined> = [];

function reducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];
    case actionTypes.DELETE_BOOK:
      return state.filter((book) => book?.id !== action.payload);
    default:
      return state;
  }
}

export { reducer };
