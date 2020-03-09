import { DELETE_TRANSACTION } from '../actions/types';

const initialState = {
  error: null,
  loading: true,
  transactions: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(transaction =>
          transaction._id !== action.payload
        )
      }
    default:
      return state;
  }
}