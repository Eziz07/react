import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {title: "Monitor", amount: 200, date: new Date(2020, 2, 11)},
    {title: "car insurance", amount: 251.33, date: new Date(2022, 2, 12)},
    {title: "Apple Watch", amount: 999, date: new Date(2023, 2, 11)},
    {title: "Desktop Monitor", amount: 599.99, date: new Date(2020, 2, 11)},
  ]

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Let's get started!</h2>
     
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
