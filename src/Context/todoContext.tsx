import React, { ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid';

export interface ITodo {
    id: string;
    title: string;
    status: 'new' | 'on-going' | 'completed'
    completed: boolean;
}

type TodoContextType = {
    todos: ITodo[];
    addTodo: (todo: ITodo) => void;
    completeTodo: (id: string) => void;
    changeStatus: (id: string, status: 'new' | 'on-going' | 'completed') => void;
    removeTodo: (id: string) => void;
}

export const TodoContext = React.createContext<TodoContextType | null>(null)

type TodoProviderProps = {
    children: ReactNode;
  };

export function TodoProvider({ children }: TodoProviderProps) {

    const [todos, setTodos] = React.useState<ITodo[]>([{ id: uuidv4(), title: "test", completed: false, status: 'new'}])

    const addTodo = (todo: ITodo) => {
        setTodos([...todos, todo])
    }

    const removeTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const completeTodo = (id: string) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const changeStatus = (id: string, status: 'new' | 'on-going' | 'completed') => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, status: status} : todo))
    }


    return (
        <TodoContext.Provider value={{todos, addTodo, removeTodo, completeTodo, changeStatus}}>
            {children}
        </TodoContext.Provider>
    )
}