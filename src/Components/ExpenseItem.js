import React, { useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
// import Card from './Card'

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2021, 12, 20)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 215
    const [title, setTitle] = useState(props.titleFor)
    const clickHandler = () => {
        if(title === props.titleFor){
            setTitle('Change')
        } else {
            setTitle(props.titleFor)
        }
        console.log(title)
    }
    return (
        <div className='expense-item' >
            <ExpenseDate dateItem={props.dateFor} />
            <div className='expense-item__description'>
                <h2> {title} </h2>
                <div className='expense-item__price' >RM {props.amountFor}</div>
            </div>
            <button className='btn btn-dark btn-sm' onClick={clickHandler} >Change Title</button>
        </div>
    )
}

export default ExpenseItem