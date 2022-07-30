import React, { useState, useEffect } from 'react';
import Expense from './Expense';
import NewTransactionForm from './NewTransactionForm';
import TransactionList from './TransactionList';
import { uniqueId } from '../utils';


// const transactionData = [
//     {
//         id: uniqueId(),
//         name: 'Donation', 
//         amount: 4000,
//         type: 'income'
//     },
//     {
//         id: uniqueId(),
//         name: 'Mzinga', 
//         amount: 300,
//         type: 'expense'
//     },
//     {
//         id: uniqueId(),
//         name: 'Unga', 
//         amount: 240,
//         type: 'expense'
//     }
// ];


function BudgetTracker() {

    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transactions, setTransactions] = useState([]);

    const getPreviousTrans = async () =>{
        const resp = await fetch("https://intense-woodland-12077.herokuapp.com/transaction_history").then((k)=>k.json())
         console.log("res",resp)
         const k = resp;
         setTransactions(k)
    
      }

      
    const getAccountBalance =  async () =>{

  
        const resp = await fetch("https://intense-woodland-12077.herokuapp.com/balance" ).then((k)=>k.json())
        console.log("res",resp)
        const l = resp;
        setExpense(l.expenses);
        setIncome(l.income);

   
     }
    const calculateExpenses = () => {
        let income = 0, expense = 0;

        transactions.forEach((data) => {
            if (data.type === 'income') {
                income += data.amount;
            } else if (data.type === 'expense') {
                expense += data.amount;  
            }
        });

        setIncome(income);
        setExpense(expense); 
    }

    const handleDeleteTransaction = id => {
        const newTransactions = transactions.filter((item) => item.id != id);
        setTransactions(newTransactions);
        
    }

    const handleAddNewTransaction = item => {
        let newTransactions = [...transactions, item];

        setTransactions(newTransactions);
    }

    useEffect(() => {
        calculateExpenses();
        getAccountBalance();
        getPreviousTrans();
    }, []);

    useEffect(() => {
        calculateExpenses();
    }, [transactions]);

    return (
        <div>
            <h1>Expense Tracker</h1>
            <Expense income={income} expense={expense} />
            <TransactionList transactions={transactions} onDeleteTransaction={handleDeleteTransaction}/>
            <NewTransactionForm onNewTransaction={handleAddNewTransaction}/>
        </div>
    )
}


export default BudgetTracker;