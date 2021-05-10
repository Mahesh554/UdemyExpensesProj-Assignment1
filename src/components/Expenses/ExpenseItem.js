import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React, {useState} from 'react';

function ExpenseItem(props) {

    const [title, updateTitle] = useState(props.title);
    
    const updateItemName = () => {
        updateTitle("updated!!!")
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>Rs. {props.amount}</div>
            </div>
            <button onClick={updateItemName}>Update Name</button>
        </Card>
    );
}

export default ExpenseItem;