import React, {useState} from 'react'

export  default function  EditTodoForm ({editTodo, task})  {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="Form-Todo">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='btn-todo'>Ubdate Task</button>
  </form>
  )
}
