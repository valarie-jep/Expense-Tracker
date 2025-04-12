import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";
import "./App.css";


function App() {
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function handleAddExpense(newExpense) {
    setExpenses((prev) => [...prev, newExpense]);
  }

  function handleDeleteExpense(id) {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  }

  function getFilteredAndSortedExpenses() {
    let result = expenses.filter((expense) =>
      (expense.name + " " + expense.description)
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

    if (sortBy === "category") {
      result.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === "description") {
      result.sort((a, b) => a.description.localeCompare(b.description));
    }

    return result;
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <hr />
      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <SortControls sortBy={sortBy} onSortChange={setSortBy} />
      <ExpenseTable
        expenses={getFilteredAndSortedExpenses()}
        onDelete={handleDeleteExpense}
      />
    </div>
  );
}

export default App;



