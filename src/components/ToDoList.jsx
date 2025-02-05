import React from 'react'
import Task from './Task'
import AddTask from './AddTask'

function ToDoList() {
  return (
    <div className='bg-green-500 w-[600px] h-[600px]'>
        <AddTask/>
        <div className="">
            <Task/>
        </div>
    </div>
  )
}

export default ToDoList