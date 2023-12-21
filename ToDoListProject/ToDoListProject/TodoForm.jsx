//TodoForm.jsx
import { useState,useRef } from "react";
export default function MyTodo({addTodo}){
    const [valueTask ,setValueTask]=useState("");
    const inptRef=useRef()
    

   
    const handelsubmit=(e)=>{
        e.preventDefault();
        if(valueTask){
            //Add Todo
            setValueTask(addTodo)
            
            //Clear Todo
            inptRef.current.value=""
            
        }
        
        

    }
    return(
        <>
          <form className="Form-Todo" onSubmit={handelsubmit}>
            <input type="text" name="Inpt-Todo" placeholder="What is the task today?" ref={inptRef} onChange={(e)=>(setValueTask(e.target.value))}></input>
            <button type="submit" className="btn-todo">Add</button>



          </form>
        
        
        </>
    )



}