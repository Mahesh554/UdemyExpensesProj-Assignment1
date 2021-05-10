import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css'

function NewExpense(props) {

    const onSaveNewExpense = (newExpenseData) => {
        const NewExpData = {
            ...newExpenseData,
            id: Math.random().toString(),
        }
        props.addNew(NewExpData);
     }

    return (
        <div className="new-expense">
            <NewExpenseForm onSaveNewExpense={onSaveNewExpense}/>
        </div>
    )
}

export default NewExpense