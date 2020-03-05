import React from 'react';
import { connect } from 'react-redux';
// actions
import { deleteTransaction } from '../actions/deleteTransaction';

const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        {/* <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button> */}
        <button className="delete-btn">x</button>
      </li>
    )
}

export default connect({ deleteTransaction })(Transaction)
