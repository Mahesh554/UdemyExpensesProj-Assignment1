import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

function Expenses(props) {
    const [year, setYear] = useState("2019");
    const { expenses } = props;
    const onYearSelect = (selectedYear) => {
        setYear(selectedYear)
        console.log(year);
    }
    return (
        <Card className='expenses'>
            <ExpensesFilter onYearSelect={onYearSelect} year={year} />
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