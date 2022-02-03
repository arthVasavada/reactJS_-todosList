import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {  /*props are inheritance from App.js*/
  return (
    <div className="container">
      <h3 className='text-center py-3' >Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {         /*todos and onDelete are inhertited from App.js using props*/
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> /*We are using map as a for loop*/
        })}                    {/*Giving condition if todos list is empty please show Message*/}                  
    </div>
  )
}

export default Todos

