import React from 'react';
// components
import AddTransaction from '../components/AddTransaction';
import Balance from '../components/Balance';
import Header from '../components/Header';
import IncomeExpense from '../components/IncomeExpense';
import Logout from '../components/Logout';
import TransactionList from '../components/TransactionList';

const Landing = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpense />
                <TransactionList />
                <AddTransaction />
                <Logout />
            </div>
        </div>
    )
}

export default Landing;
