//Todogeneral.jsx
import React ,{useState} from "react";
import './style.css';
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditingForm from './EditingForm';
import {v4 as uuidv4} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

 
export default function TodoGeneral(){
    const [todolist , setTodolist]=useState([]);

    const addTodo=(todo)=>{
        setTodolist(
            [
                ...todolist,{
                    id:uuidv4(),task:todo,completed: false, isEditing: false 
                },
            ]
        );

    }
    const deletTodo=(id)=>{
        setTodolist(todolist.filter((item )=>item.id !==id ));
    }
    const toggleComplet =(id)=>{
        setTodolist(
            todolist.map((todo)=>
            todo.id ===id ? {...todo,completed: !todo.completed }:todo
            )
        );

    }
    const editTodo = (id) => {
        setTodolist(
          todolist.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
          )
        );
      }

      const editTask = (task, id) => {
        setTodolist(
          todolist.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
          )
        );
      };
    
    
    return(
        <>
        <div className="Todolist-general">
        <h1> <FontAwesomeIcon icon={faTasks}/> Welcom ! </h1>
        <TodoForm addTodo={addTodo} />

        {/* display todos */}
      {todolist.map((todo) =>
        todo.isEditing ? (
          <EditingForm   key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deletTodo={deletTodo}
            editTodo={editTodo}
            toggleComplet={toggleComplet}
          />
        )
      )}


        </div>
        </>
    )
}
