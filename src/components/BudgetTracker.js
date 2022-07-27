import React from 'react';
import Expense from './Expense';
import NewTransactionForm from './NewTransactionForm';
import TransactionList from './TransactionList';


function BudgetTracker() {
    return (
        <div>
            <h1>Expense Tracker</h1>
            <Expense />
            <TransactionList />
            <NewTransactionForm />
        </div>
    )
}

export default BudgetTracker;