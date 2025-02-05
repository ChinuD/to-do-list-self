import React from 'react'

function Task() {
  return (
    <div className='w-[400px] h-[60px] border-none bg-yellow-200 rounded-md outline-none flex items-center p-2 justify-between pr-4'>
        <div className="flex">
            <input className='ml-4' type="checkbox"/>
            <p className='px-4 text-lg'>Hello this is task</p>
        </div>
        <button className='flex-end'>Delete</button>
    </div>
  )
}

export default Task