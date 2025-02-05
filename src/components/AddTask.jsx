import React from 'react'
import Task from './Task'

function AddTask() {
  return (
    <div className='w-[400px] h-[60px] border-none bg-white flex p-2 rounded-sm justify-between gap-3'>
        <input type="text" className='bg-yellow-200 w-[100%] border rounded-sm' />
        <button onClick={()=>{alert('hello')}} className='bg-red-400 px-4 rounded-sm'>Add</button>
    </div>
  )
}

export default AddTask