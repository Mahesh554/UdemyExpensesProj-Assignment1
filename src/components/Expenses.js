import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css'

function Expenses(props) {
    const { expenses } = props;
    return (
        <Card className='expenses'>
            {
                expenses.map(expense => <ExpenseItem key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
                )
            }
        </Card>
    )
}

export default Expenses;