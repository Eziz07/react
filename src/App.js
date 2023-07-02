import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { title: "Monitor", amount: 200, date: new Date(2020, 2, 11) },
  { title: "car insurance", amount: 251.33, date: new Date(2022, 2, 12) },
  { title: "Apple Watch", amount: 989, date: new Date(2019, 2, 11) },
  { title: "Desktop Monitor", amount: 599.99, date: new Date(2022, 2, 11) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseData = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* <h2 style={{textAlign: 'center'}}>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseData} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
