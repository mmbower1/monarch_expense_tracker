import { DELETE_TRANSACTION } from '../actions/types';

const initialState = {
  transactions: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(transaction =>
          transaction.id !== action.payload
        )
      }
    default:
      return state;
  }
}