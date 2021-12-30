import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditting, setIsEditting] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        // console.log(expenseData)
        props.onAddExpense(expenseData)
        setIsEditting(false)
    }
    const startEdittingHandler = () => {
        console.log('edit')
        setIsEditting(true)
    }
    const stopEditting = () => {
        setIsEditting(false)
    }

    return (
        <div className='new-expense'>
            {!isEditting && <button onClick={startEdittingHandler} > Add New</button>}

            {isEditting && <ExpenseForm onCancel={stopEditting} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;