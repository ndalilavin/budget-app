import React from 'react';

function TransactionList({ transactions }) {
    return (
        <div>
            <h2>Transaction List</h2>
            <ul>
                {
                    transactions.map((data) => <li key={data.id}> {data.name} ${data.amount} <button>x</button></li>)
                } 
            </ul>
        </div>
    )
}

export default TransactionList;