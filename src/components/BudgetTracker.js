import React, { useState, useEffect } from 'react';
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
    },
    {
        id: uniqueId(),
        name: 'Unga', 
        amount: 240,
        type: 'expense'
    }
];


function BudgetTracker() {

    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transactions, setTransactions] = useState(transactionData);

    const calculateExpenses = () => {
        let income = 0, expense = 0;

        transactionData.forEach((data) => {
            if (data.type === 'income') {
                income += data.amount;
            } else if (data.type === 'expense') {
                expense += data.amount;  
            }
        });

        setIncome(income);
        setExpense(expense); 
        console.log(income, expense)
    }

    useEffect(() => {
        calculateExpenses();
    }, []);

    return (
        <div>
            <h1>Expense Tracker</h1>
            <Expense income={income} expense={expense} />
            <TransactionList transactions={transactions}/>
            <NewTransactionForm />
        </div>
    )
}


export default BudgetTracker;