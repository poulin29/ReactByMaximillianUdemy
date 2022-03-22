import React from 'react';

import Expenses from './components/Expenses/Expenses';

const App = (props) =>  {
  const expenses =[
    {
      title: "Car Insurance",
      amount: 144.10,
      date : new Date(2021, 3, 20)
    },
    {
      title: "Grocery",
      amount: 120,
      date : new Date(2021, 4, 19)
    },
    {
      title: "Utilities",
      amount:250,
      date : new Date(2021, 5, 18)
    },
    {
      title: "Rent",
      amount:450,
      date : new Date(2021, 6, 17)
    }
  ]
  return (
    <div>
      <h2>Lets get Started!</h2>
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;