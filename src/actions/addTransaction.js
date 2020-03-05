import { ADD_TRANSACTION } from './types';

export const addTransaction = (transaction) => dispatch => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
    })
  }