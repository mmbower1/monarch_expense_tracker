import React from 'react';
import { connect } from 'react-redux';
import { numberWithCommas } from '../utils/format';

const IncomeExpense = ({ transactions }) => {
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">
                    ${numberWithCommas(income)}
                </p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p id="money-minus" className="money minus">
                    ${numberWithCommas(expense)}
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    transactions: state.addTransaction.transactions,
    console: console.log('income state: ', state.addTransaction.transactions),
});

export default connect(mapStateToProps, { })(IncomeExpense)
