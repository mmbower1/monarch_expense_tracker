import React from 'react';
import { connect } from 'react-redux';
import { numberWithCommas } from '../utils/format';
// actions
import { deleteTransaction } from '../actions/deleteTransaction';

const Transaction = ({ transaction }) => {
  console.log('transaction: ', transaction);
    const sign = transaction.amount < 0 ? '-' : '+';
    console.log('sign: ', sign)
    return (
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button>
      </li>
    )
}

// const mapStateToProps = (state) => ({
//   transaction: state.addTransaction.transactions
// })

export default connect(null, { deleteTransaction })(Transaction)
