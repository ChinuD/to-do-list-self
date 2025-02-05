import React, { useState } from 'react'

function Task({taskValue,taskDelete}) {

  const [completed,setCompleted] = useState(false)
  console.log(completed)

  return (
    <div className='w-[400px] h-[60px] border-none bg-yellow-200 rounded-md outline-none flex items-center p-2 justify-between pr-4'>
        <div className="flex" onClick={()=> setCompleted(!completed)} style={{
    textDecoration: completed ? 'line-through' : 'none'}}>
            <input className='ml-4' type="checkbox" checked={completed}/>
            <p className='px-4 text-lg'>{taskValue}</p>
        </div>
        <button className='flex-end' onClick={taskDelete}>Delete</button>
    </div>
  )
}

export default Task