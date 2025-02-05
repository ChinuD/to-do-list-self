import { useState } from 'react'
import './App.css'
import Task from './components/Task'
import AddTask from './components/AddTask'
import ToDoList from './components/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-500 w-screen h-screen p-4'>
      <ToDoList/>
    </div>
  )
}

export default App
