import React from 'react';
import { connect } from 'react-redux';
// components
import Transaction from './Transaction';

const TransactionList = ({ transactions }) => {

    return (
        <div>
            <h3>Transaction history</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    transactions: state.getTransactions.transactions
});

export default connect(mapStateToProps, { })(TransactionList)
