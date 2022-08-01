import React from 'react';

function TransactionList({ transactions, onDeleteTransaction }) {
    return (
        <div>
            <h2>Transaction List</h2>
            <ul className='transactionCard'>
                {
                    transactions.map((data) => <li key={data.id}> {data.name} KES: {data.amount} 
                        <button onClick={() => onDeleteTransaction(data.id)}>x</button></li>)
                } 
            </ul>
        </div>
    )
}

export default TransactionList;