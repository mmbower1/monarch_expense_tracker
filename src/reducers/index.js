import { combineReducers } from 'redux';
import addTransaction from './addTransaction';
import deleteTransaction from './deleteTransaction';

export default combineReducers({
    addTransaction,
    deleteTransaction
});