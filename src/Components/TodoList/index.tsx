import { useContext } from "react"
import { ITodo, TodoContext } from "../../Context/todoContext"
import { TodoCard } from "../TodoCard"
import { DropTargetArea } from "../DropTargetArea"


export function TodoList() {
  const todosList = useContext(TodoContext)

  if(!todosList) {
    return null
  }

  const handleDrop = (item: ITodo) => {
    todosList.changeStatus(item.id, item.status)
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: '30px', border: '1px solid black'}}>
      <DropTargetArea status="new" onDrop={handleDrop}>
        <>
          {todosList.todos.filter((todo) => todo.status === 'new').map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              status={todo.status}
              completed={todo.completed}
              handleComplete={todosList.completeTodo}
              handleRemove={todosList.removeTodo}
            />
          )
        })}
        </>
      </DropTargetArea>

      <DropTargetArea status="on-going" onDrop={handleDrop}>
        {todosList.todos.filter((todo) => todo.status === 'on-going').map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              status={todo.status}
              completed={todo.completed}
              handleComplete={todosList.completeTodo}
              handleRemove={todosList.removeTodo}
            />
          )
        })}
          
      </DropTargetArea>
        
      <DropTargetArea status="completed" onDrop={handleDrop}>
        {todosList.todos.filter((todo) => todo.status === 'completed').map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              status={todo.status}
              completed={todo.completed}
              handleComplete={todosList.completeTodo}
              handleRemove={todosList.removeTodo}
            />
          )
        })}
      </DropTargetArea>
    </div>
  )
}