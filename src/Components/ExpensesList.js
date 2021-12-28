import React, { useState } from 'react'
import Card from './Card';

import ExpenseItem from './ExpenseItem'
import "./ExpensesList.css";
import ExpensesFilter from './FilterExpenses';

const ExpensesList = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = selectedYear => {
        console.log(selectedYear)
        setFilteredYear(selectedYear)
    }
    return (
        <div>
            <Card className='expenses' >
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem
                    titleFor={props.items[0].title}
                    amountFor={props.items[0].amount}
                    dateFor={props.items[0].date} />
            </Card>
        </div>
    )
}

export default ExpensesList
