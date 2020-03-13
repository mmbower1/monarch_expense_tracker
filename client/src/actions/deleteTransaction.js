import { DELETE_TRANSACTION, TRANSACTION_ERROR } from './types';
import axios from 'axios';

export const deleteTransaction = (_id) => async dispatch => {
  try {
    await axios.delete(`/api/v1/transactions/${_id}`);
    dispatch({
      type: DELETE_TRANSACTION,
      payload: _id
    })
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data.error
    })
  }
}