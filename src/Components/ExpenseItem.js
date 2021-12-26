import React from 'react'

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    const expenseDate = new Date(2021, 12, 20)
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 215
    const day = props.dateFor.toLocaleString('en-GB', { day: '2-digit' })
    const month = props.dateFor.toLocaleString('en-GB', { month: 'long' })
    const year = props.dateFor.getFullYear()

    return (
        <div>
            <div className='expense-item' >
                <div> {expenseDate.toLocaleString('en-GB')} </div>
                <div>
                    <h2 className='expense-item__description'> {expenseTitle} </h2>
                    <div className='expense-item__price' >RM {expenseAmount}</div>
                </div>
            </div>
            <div className='expense-item' >
                <div>
                    <div>{day}</div>
                    <div>{month}</div>
                    <div>{year}</div>
                </div>
                <div>
                    <h2 className='expense-item__description'> {props.titleFor} </h2>
                    <div className='expense-item__price' >RM {props.amountFor}</div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem
