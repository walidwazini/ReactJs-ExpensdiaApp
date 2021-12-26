import React from 'react'
import Card from './Card';

import ExpenseItem from './ExpenseItem'
import "./ExpensesList.css";

const ExpensesList = (props) => {
    return (
        <Card className='expenses' >
            <ExpenseItem
                titleFor={props.items[0].title}
                amountFor={props.items[0].amount}
                dateFor={props.items[0].date} />
        </Card>
    )
}

export default ExpensesList
