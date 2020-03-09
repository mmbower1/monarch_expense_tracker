import { ADD_TRANSACTION, TRANSACTION_ERROR } from './types';
import axios from 'axios';

export const addTransaction = (transaction) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/api/v1/transactions', transaction, config);
    dispatch({
      type: ADD_TRANSACTION,
      payload: res.data.data
    })
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data.error
    })
  }

  }