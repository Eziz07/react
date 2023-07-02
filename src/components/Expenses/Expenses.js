import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const handleFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onReceivedFilter={handleFilter} />

      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
