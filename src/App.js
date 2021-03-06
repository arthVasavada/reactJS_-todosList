
import './App.css';
import Header from './components/Header';  //importing functions from different component files
import Todos from './components/Todos'; 
import Footer from './components/Footer'; 
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) =>{
    console.log("Deleted Successfully", todo);

    setTodos(todos.filter((e) =>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Buy vegetables",
      desc: "Go to market and buy vegetables"
    },
    {
      sno: 2,
      title: "Buy Groceries",
      desc: "Go to market and buy groceries"
    },
    {
      sno: 3,
      title: "Refill petrol",
      desc: "Go to pump and refill petrol"
    }
  ])
  return (
      <><Header title="My Todos List"  searchBar={false}/>   {/* Declaring Props */}   
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/></>
  );
}

export default App;
