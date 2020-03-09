import React from 'react';
import { connect } from 'react-redux';
import { numberWithCommas } from '../utils/format'
// actions
import { deleteTransaction } from '../actions/deleteTransaction';

const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    console.log('sign: ', sign)
    return (
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button>
      </li>
    )
}

export default connect({ deleteTransaction })(Transaction)
