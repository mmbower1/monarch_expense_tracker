import { ADD_TRANSACTION } from '../actions/types';

const initialState = {
  error: null,
  loading: true,
  transactions: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }
    default:
      return state;
  }
}