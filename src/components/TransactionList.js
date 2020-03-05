import React from 'react';
// components
import Transaction from './Transaction';

const TransactionList = () => {
    const initialState = {
        transactions: []
      }

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {initialState.transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}

export default TransactionList
