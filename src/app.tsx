import { useContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from "./Context/todoContext"
import { TodoList } from "./Components/TodoList"

export function App() {
  
  const [newTodo, setNewTodo] = useState("")

  const todosList = useContext(TodoContext)

  if(!todosList) {
    return null
  }

  return (
    <div>
      <div>
        <h1>Add Todo</h1>
        <input type="text" placeholder="Add Todo" onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={() => {
          todosList.addTodo({
            id: uuidv4(),
            status: 'new',
            title: newTodo,
            completed: false
          })
        }}>Add</button>
      </div>
      
      <TodoList />
    </div>
  )
}