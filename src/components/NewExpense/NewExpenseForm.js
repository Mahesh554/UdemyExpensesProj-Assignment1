import React, { useState } from 'react';
import './NewExpenseForm.css';

function NewExpenseForm(props) {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const setTitle = (event) => {
        setFormData((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    }

    const setAmount = (event) => {
        setFormData((prevState) => {
            return { ...prevState, amount: event.target.value }
        })
    }

    const setDate = (event) => {
        setFormData((prevState) => {
            return { ...prevState, date: event.target.value }
        })
    }

    const addExpense = (event) => {
        event.preventDefault();
        const newExpenseItem = {
            title: formData.title,
            amount: formData.amount,
            date: new Date(formData.date)
        }
        props.onSaveNewExpense(newExpenseItem);
        setFormData({
            title: '',
            amount: '',
            date: ''
        })
    }


    return (
        <form onSubmit={addExpense}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={setTitle} value={formData.title}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="Number" min="0.01" step="0.01" onChange={setAmount} value={formData.amount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={setDate} value={formData.date} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm;