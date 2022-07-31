import React from 'react';


function Expense ({income, expense}) {
    return (
        <div>
            <div>
                <h2>Current Balance</h2>
                <div>KES: {income - expense}</div>
            </div>
            <div>
                <div>
                    <h2>Income</h2>
                    <div>KES: {income}</div>    
                </div>
                <div>
                    <h2>Expense</h2>
                    <div>KES: {expense}</div>
                </div>
            </div>
            
        </div>
    )
}

export default Expense;