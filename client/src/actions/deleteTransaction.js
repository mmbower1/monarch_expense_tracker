import { DELETE_TRANSACTION, TRANSACTION_ERROR } from './types';
import axios from 'axios';

export const deleteTransaction = (id) => async dispatch => {
  try {
    await axios.delete(`/api/v1/transactions/${id}`);
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data.error
    })
  }
}