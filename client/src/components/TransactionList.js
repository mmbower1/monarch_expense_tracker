import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// actions
import { addTransaction } from '../actions/addTransaction';
import { getTransactions } from '../actions/getTransactions';
// components
import Transaction from './Transaction';
import Spinner from "react-spinners/ClipLoader";

const TransactionList = ({ getTransactions, addTx, getTx: { loading, transactions }, deleteTx }) => {
    useEffect(() => {
        getTransactions();
        // show spinner
        // debugger;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h3>Transaction history</h3>
            <ul className="list">
                {loading === true ? <Spinner color={"#fff"} /> : transactions.map(transaction => (
                    <Transaction key={transaction._id} transaction={transaction} />
                ))}
                {addTx.map(transaction => (
                    <Transaction key={transaction._id} transaction={transaction} />
                ))}
                {deleteTx.map(transaction => (
                    <Transaction key={transaction._id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    addTx: state.addTransaction.transactions,
    getTx: state.getTransactions,
    deleteTx: state.deleteTransaction.transactions
});

export default connect(mapStateToProps, { addTransaction, getTransactions })(TransactionList)
