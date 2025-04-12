function ExpenseTable({ expenses, onDelete }) {
    return (
        <table className="expense-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {expenses.length === 0 ? (
                    <tr>
                        <td colSpan="6">No expenses yet.</td>
                    </tr>
                ) : (
                    expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.name}</td>
                            <td>{expense.description}</td>
                            <td>{expense.category}</td>
                            <td>Ksh. {expense.amount.toFixed(2)}</td>
                            <td>{expense.date}</td>
                            <td>
                                <button onClick={() => onDelete(expense.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}

export default ExpenseTable;