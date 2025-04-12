import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        amount: "",
        date: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newExpense = {
            ...formData,
            id: Date.now(), // unique ID for each expense
            amount: parseFloat(formData.amount),
        };
        onAddExpense(newExpense);
        setFormData({
            name: "",
            description: "",
            category: "",
            amount: "",
            date: "",
        });
    }

    return (
        <form onSubmit={handleSubmit} className="expense-form">
            <input
                type="text"
                name="name"
                placeholder="Expense Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;
