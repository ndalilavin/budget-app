import React, { useState, useEffect } from 'react';
import Expense from './Expense';
import NewTransactionForm from './NewTransactionForm';
import TransactionList from './TransactionList';
import { uniqueId } from '../utils';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


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

    const saveState = () => {
        localStorage.setItem('expenseTrackerState', JSON.stringify(transactions));
    }

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

        saveState();

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
        let localState = JSON.parse(localStorage.getItem('expenseTrackerState'));
        if (localState) {
            setTransactions(localState);
        } else {
            calculateExpenses();
        }
        calculateExpenses();
        getAccountBalance();
        getPreviousTrans();
    }, []);

    useEffect(() => {
        calculateExpenses();
    }, [transactions]);

    return (
        <Router>
            <div>
                <Navbar />
                <h1>Expense Tracker</h1>
                <Expense income={income} expense={expense} />
                <TransactionList transactions={transactions} onDeleteTransaction={handleDeleteTransaction}/>
                <NewTransactionForm onNewTransaction={handleAddNewTransaction}/>
            </div>
{/* 
        <Routes>
            <Route exact path="/" element={<BudgetTracker/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
        </Routes> */}
            
        </Router>
    )
}


export default BudgetTracker;