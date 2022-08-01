import React from 'react';
import './App.css';


function Expense ({income, expense}) {
    return (
        <div>
            <div>
                <h2>Current Balance</h2>
                <div style={{color: 'orange', fontSize: 50}}>KES: {income - expense}</div>
            </div>
            <div className='inmwrap'>
                <div className='incomeDiv'>
                    <h2>Income</h2>
                    <div>KES: {income}</div>    
                </div>
                <div className='expenseDiv'>
                    <h2>Expense </h2>
                    <div>KES: {expense}</div>
                </div>
            </div>
            
        </div>
    )
}

export default Expense;