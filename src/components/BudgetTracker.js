import React from 'react';
import Expense from './Expense';
import NewTransactionForm from './NewTransactionForm';
import TransactionList from './TransactionList';
import { uniqueId } from '../utils';


const transactionData = [
    {
        id: uniqueId(),
        name: 'Donation', 
        amount: 4000,
        type: 'income'
    },
    {
        id: uniqueId(),
        name: 'Mzinga', 
        amount: 300,
        type: 'expense'
    }
];


function BudgetTracker() {
    return (
        <div>
            <h1>Expense Tracker</h1>
            <Expense income={3000} expense={500} />
            <TransactionList transactions={transactionData}/>
            <NewTransactionForm />
        </div>
    )
}

export default BudgetTracker;