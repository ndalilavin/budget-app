import React from 'react';

function NewTransactionForm() {
    return (
        <div>
            <h2>Add New Transaction</h2>
            <form>
                <label>
                    Name
                    <div>
                        <input type="text" />
                    </div>
                </label>
                <label>
                    Amount
                    <div>
                        <input type="number" />
                    </div>
                </label>
                <div>
                    <button>Income</button>
                    <button>Expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewTransactionForm;