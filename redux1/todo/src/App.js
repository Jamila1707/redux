
import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { addtodo, completeTodo, deleteTodo, updateTodo } from './actions/todoAction';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const todos = useSelector(state => state.todoReducer)
  const [task,setTask]=useState("")
  const [edit,setEdit]=useState("")
  const [filter, setFilter]=useState("all")
  const dispatch = useDispatch()
  return (
    <div className="App">
    
        <input type='text' placeholder="add task here" onChange={(e)=>setTask(e.target.value)} />
        <button onClick={()=>dispatch(addtodo(task))}>Add Task</button>
        <button onClick={()=>setFilter("all")}>all</button>
        <button onClick={()=>setFilter("dome")}>done</button>
        <button onClick={()=>setFilter("undone")}>undone</button>
        
        
        {filter ==="all" ? todos.map(el=><div>
            <h2>{el.title}</h2>
           
            <Button variant="primary" onClick={handleShow}>
        Update
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <input type='text' placeholder="Update task here" onChange={(e)=>setEdit(e.target.value)} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(updateTodo(edit,el.id));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <button onClick={()=>dispatch(deleteTodo(el.id))}>Delete</button>
            <button onClick={()=>dispatch(completeTodo(el.id))}>{el.complete ? "done":"undone"}</button>
          </div>): filter==="done" ? todos.filter(el=> el.complete===true)
          .map(el=><div>
          <h2>{el.title}</h2>
          <button onClick={()=>dispatch(deleteTodo(el.id))}>Delete</button>
          <button onClick={()=>dispatch(completeTodo(el.id))}>{el.complete ? "done":"undone"}</button>
        </div>) : todos.filter(el=> el.complete===false)
          .map(el=><div>
          <h2>{el.title}</h2>
          <button onClick={()=>dispatch(deleteTodo(el.id))}>Delete</button>
          <button onClick={()=>dispatch(completeTodo(el.id))}>{el.complete ? "done":"undone"}</button>
        </div>)

          }
      
    </div>
  );
}

export default App;
