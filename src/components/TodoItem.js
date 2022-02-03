import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
        <h4>{todo.title}</h4>
        <h4>{todo.desc}</h4>
        <button className="btn btn-sm btn-danger my-3" onClick={()=>{onDelete(todo)}}>Delete</button> {/*we have passed the func rather than calling it*/}
    </div>
  )
}

export default TodoItem
