import React, { useState } from 'react';
import { uniqueId } from '../utils';
import './App.css';

function NewTransactionForm( {onNewTransaction} ) {
    const [nameValue, setNameValue] = useState('');
    const [amountValue, setAmountValue] = useState('');

    const addTransaction = async (type, evt) => {  
        evt.preventDefault();

        const rawResponse = await fetch('https://secret-lake-69778.herokuapp.com/transaction_history', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: uniqueId(),
                    name:nameValue,
                    amount: parseInt(amountValue),
                    type: type
            
                  })
            });
            const content = await rawResponse.json();

        const data = { content: content.id, name:content.name, amount:content.amount, type: content.type };

        onNewTransaction(data);
    }

    return (
        <div>
            <h2>Add New Transaction</h2>
            <form className='form1'> 
                    <div>
                        <input type="text" placeholder="Name" value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)} />
                    </div> <br/>

                    <div>
                        <input type="number" placeholder="Amount" value={amountValue} 
                            onChange={(e) => setAmountValue(e.target.value)} /></div> <br/>

                <div className='transaction-btn'>
                    <button className="incomeBtn" onClick={(e) => addTransaction('income', e)}>Income</button> 
                    <button className="expenseBtn" onClick={(e) => addTransaction('expense', e)}>Expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewTransactionForm;