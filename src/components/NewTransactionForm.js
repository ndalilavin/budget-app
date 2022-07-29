import React, { useState } from 'react';
import { uniqueId } from '../utils';

function NewTransactionForm() {
    const [nameValue, setNameValue] = useState('');
    const [amountValue, setAmountValue] = useState('');

    const addTransaction = type => {  
        const data = { id: uniqueId(), name:nameValue, amount: amountValue, type: type };

        console.log(data);
    }

    return (
        <div>
            <h2>Add New Transaction</h2>
            <form>
                <label>
                    Name
                    <div>
                        <input type="text" value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)} />
                    </div>
                </label>
                <label>
                    Amount
                    <div>
                        <input type="number" value={amountValue} 
                            onChange={(e) => setAmountValue(e.target.value)} />
                    </div>
                </label>
                <div>
                    <button onClick={() => addTransaction('income')}>Income</button>
                    <button onClick={() => addTransaction('expense')}>Expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewTransactionForm;