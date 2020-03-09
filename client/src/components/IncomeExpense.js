import React from 'react';
import { connect } from 'react-redux';
import { numberWithCommas } from '../utils/format';

const IncomeExpense = (props) => {
    console.log('props: ', props);
    const initialState = {
        transactions: []
    }
    const amounts = initialState.transactions.map(transaction => transaction.amount);

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
    state: console.log('income state: ', state)
});

export default connect(mapStateToProps, { })(IncomeExpense)
