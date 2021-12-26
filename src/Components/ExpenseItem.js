import React from 'react'

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

const ExpenseItem = (props) => {
    const expenseDate = new Date(2021, 12, 20)
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 215
   
    return (
        <div>
            <Card className='expense-item' >
                <div> {expenseDate.toLocaleString('en-GB')} </div>
                <div>
                    <h2 className='expense-item__description'> {expenseTitle} </h2>
                    <div className='expense-item__price' >RM {expenseAmount}</div>
                </div>
            </Card>
            <div className='expense-item' >
                <div>
                    <ExpenseDate dateItem={props.dateFor} />
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
