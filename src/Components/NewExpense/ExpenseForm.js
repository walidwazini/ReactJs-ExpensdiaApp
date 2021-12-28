import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        console.log('title')
        // setUserInput({
        //     enteredTitle: event.target.value,
        //     ...userInput,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    }

    const amountChangeHandler = amountEvent => {
        setEnteredAmount(amountEvent.target.value)
        console.log('amount')
        // setUserInput({
        //     enteredAmount: event.target.value,
        //     ...userInput,
        // })
        //     setUserInput((prevState) => {
        //         return { ...prevState, enteredAmount: amountEvent.target.value }
        //     })
    }

    const dateChangeHandler = dateEvent => {
        console.log('date')
        setEnteredDate(dateEvent.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const newExpense = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(newExpense)
    }

    return (
        // <div>
        //     <form className='card centre' 
        //     style={{ width: 700 }}
        //     onSubmit={submitHandler}
        //     >
        //         <div className="card-header">
        //             New Expense Form
        //         </div>
        //         <div className='container-sm ' >
        //             <label className="form-label">
        //                 Title
        //             </label>
        //             <input
        //                 type="text" style={{ width: 300 }}
        //                 className="form-control input-group-sm"
        //                 onChange={titleChangeHandler}

        //             />
        //             <label className="form-label">
        //                 Amount
        //             </label>
        //             <input
        //                 type="number" style={{ width: 300 }}
        //                 className="form-control input-group-sm"
        //                 onChange={amountChangeHandler}
        //             />
        //             <label className="form-label">
        //                 Date
        //             </label>
        //             <input
        //                 type="date" style={{ width: 300 }}
        //                 min='2019-01-01' max='2025-12-31'
        //                 className="form-control input-group-sm"
        //                 onChange={dateChangeHandler}
        //             />
        //             <div className='d-grip gap-2 mt-4' >
        //                 <button type="button" className="btn btn-primary">
        //                     Add New Expense
        //                 </button>
        //             </div>
        //         </div>
        //     </form>
        // </div>

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
