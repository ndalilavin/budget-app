import React from 'react';
import Expense from './Expense';
import NewTransactionForm from './NewTransactionForm';
import TransactionList from './TransactionList';


const transactionData = [
    {
        name: 'Salary', 
        amount: 3000,
        type: 'income'
    }
];


function BudgetTracker() {
    return (
        <div>
            <h1>Expense Tracker</h1>
            <Expense income={3000} expense={500} />
            <TransactionList />
            <NewTransactionForm />
        </div>
    )
}

export default BudgetTracker;