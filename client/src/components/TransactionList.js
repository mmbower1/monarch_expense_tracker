import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// actions
import { addTransaction } from '../actions/addTransaction';
import { getTransactions } from '../actions/getTransactions';
// components
import Transaction from './Transaction';

const TransactionList = ({ getTransactions, getTx }) => {
    useEffect(() => {
        // addTransaction();
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 
    return (
        <div>
            <h3>Transaction history</h3>
            <ul className="list">
                {getTx.map(transaction => (
                    <Transaction key={transaction._id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    // addTx: state.addTransaction.transactions,
    getTx: state.getTransactions.transactions
});

export default connect(mapStateToProps, { addTransaction, getTransactions })(TransactionList)
