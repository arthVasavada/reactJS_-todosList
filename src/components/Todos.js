import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {  /*props are inheritance from App.js*/
  return (
    <div className="container">
      <h3 className='text-center my-3' >Todos List</h3>
      {props.todos.map((todo)=>{         /*todos and onDelete are inhertited from App.js using props*/
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> /*We are using map as a for loop*/
      })}
    </div>
  )
}

export default Todos

