import { GET_TRANSACTIONS, TRANSACTION_ERROR } from '../actions/types';

const initialState = {
  error: null,
  loading: true,
  transactions: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload
      }
      case 'TRANSACTION_ERROR':
          return {
            ...state,
            error: action.payload
          }
    default:
      return state;
  }
}