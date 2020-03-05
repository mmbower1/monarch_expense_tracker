import { DELETE_TRANSACTION } from './types';

export const deleteTransaction = (id) => dispatch => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id
    })
  }