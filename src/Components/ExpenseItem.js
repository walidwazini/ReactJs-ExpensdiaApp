import React from 'react'
// import { Container, Button, Col, } from 'react-bootstrap'

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
// import Card from './Card'

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2021, 12, 20)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 215

    return (
        <div className='expense-item' >
            <ExpenseDate dateItem={props.dateFor} />
            <div className='expense-item__description'>
                <h2 className='.title' > {props.titleFor} </h2>
                <div className='expense-item__price' >RM {props.amountFor}</div>
            </div>
            <button>Change Title</button>
        </div>
    )
}

export default ExpenseItem