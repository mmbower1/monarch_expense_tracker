import { GET_TRANSACTIONS, TRANSACTION_ERROR } from './types';
import axios from 'axios';

export const getTransactions = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/transactions');
        dispatch({
            type: GET_TRANSACTIONS,
            payload: res.data.data
        })
    } catch (err) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: err.response.data.error
        })
    }
}