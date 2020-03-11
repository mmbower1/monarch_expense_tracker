import React from 'react';
import { connect } from 'react-redux';
import { numberWithCommas } from '../utils/format';

const Balance = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log('amounts: ', amounts)
  console.log('total: ', total)

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  transactions: state.addTransaction.transactions
});

export default connect(mapStateToProps, { })(Balance);
