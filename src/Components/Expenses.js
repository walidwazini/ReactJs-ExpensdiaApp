import React, { useState } from 'react'
import Card from './Card';

import "./Expenses.css";
import ExpensesList from './ExpensesList';
import ExpensesFilter from './FilterExpenses';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    // const [filteredMonth, setFilteredMonth] = useState('jan')
    const filterChangeHandler = selectedYear => {
        console.log(selectedYear)
        setFilteredYear(selectedYear)
    }
    // const monthNames = ["January", "February", "March", "April", "May", "June",
    //     "July", "August", "September", "October", "November", "December"
    // ];
    const filteredExpenses = props.items.filter(exp => {
        return exp.date.getFullYear().toString() === filteredYear
        // return exp.date.getMonth().toString === filteredMonth
    })

   

    return (
        <div>
            <Card className='expenses' >
                <ExpensesFilter selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />
                {/* {expensesContent} */}
                <ExpensesList items={filteredExpenses} />
                {/* <ExpenseItem
                    key={props.items[0].id}
                    titleFor={props.items[0].title}
                    amountFor={props.items[0].amount}
                    dateFor={props.items[0].date}
                /> */}
            </Card>
        </div>
    )
}

export default Expenses
