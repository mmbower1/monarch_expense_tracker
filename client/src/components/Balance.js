import React from 'react';

const initialState = {
  transactions: []
};

const Balance = () => {
  const amounts = initialState.transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log('amounts: ', amounts)
  console.log('total: ', total)

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}

export default Balance;
