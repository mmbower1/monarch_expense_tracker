import React from 'react';
import { connect } from 'react-redux';
import { numberWithCommas } from '../utils/format';
// actions
// import { getTransactions } from '../actions/getTransactions'; 

const Balance = ({ getTx }) => {
  const amounts = getTx.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // useEffect(() => {
  //   getTransactions(total);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  // addTx: state.addTransaction.transactions,
  getTx: state.getTransactions.transactions
});

export default connect(mapStateToProps, { })(Balance);
