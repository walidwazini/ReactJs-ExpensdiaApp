import React from 'react'

import ExpenseItem from './ExpenseItem'
import "./ExpensesList.css";

const ExpensesList = (props) => {
    return (
        <div className='expenses' >
            <ExpenseItem
                titleFor={props.items[0].title}
                amountFor={props.items[0].amount}
                dateFor={props.items[0].date} />
        </div>
    )
}

export default ExpensesList
