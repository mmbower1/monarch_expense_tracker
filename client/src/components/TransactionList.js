import React from 'react';
import { connect } from 'react-redux';
// actions
import { getTransactions } from '../actions/getTransactions';
// components
import Transaction from './Transaction';

const TransactionList = ({ getTransactions }) => {
    const initialState = {
        transactions: []
      }

    return (
        <div>
            <h3>Transaction history</h3>
            <ul className="list">
                {initialState.transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps, getTransactions)(TransactionList)
