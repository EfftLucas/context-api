import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './app'
import { TodoProvider } from './Context/todoContext'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </TodoProvider>
  </React.StrictMode>,
)
