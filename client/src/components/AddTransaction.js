import React, { useState } from 'react';
import { connect } from 'react-redux';
// actions
import { addTransaction } from '../actions/addTransaction';

const AddTransaction = ({ addTransaction, transaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
  
    const onSubmit = e => {
      e.preventDefault();
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        // turns from a string to a number
        amount: +amount,
        text
      }
      addTransaction(newTransaction);
      console.log('newTransaction: ', newTransaction)
    }

    return (
        <div>
            <div>
                <h3>Add new transaction</h3>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-control">
                        <label htmlFor="text">Memo</label>
                        <input
                            type="text"
                            value={text}
                            placeholder="What's it for?"
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">
                            Amount: <br />
                            (positive + income, &nbsp;negative - expense)</label>
                        <input
                            type="number"
                            placeholder="Enter amount..."
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <button className="btn">ADD TRANSACTION</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    transaction: state.transaction,
    log: console.log('AddTransaction state: ', state.transaction)
})

export default connect(mapStateToProps, { addTransaction })(AddTransaction)
