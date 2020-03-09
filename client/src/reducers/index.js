import { combineReducers } from 'redux';
import addTransaction from './addTransaction';
import deleteTransaction from './deleteTransaction';
import getTransactions from './getTransactions';

export default combineReducers({
    addTransaction,
    deleteTransaction,
    getTransactions
});