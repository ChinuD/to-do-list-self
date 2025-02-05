import React, { useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {

    const newTask = { value: task };
    console.log("function called")
    localStorage.setItem("Tasks",newTask)
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks)=>prevTasks.filter((task,i) => i != index))
  }

  console.log(tasks);

  return (
    <div className="bg-white w-[450px] h-[600px] py-4 rounded-md border">
      <div className="flex justify-center">
        <AddTask onAddTask={handleAddTask} />
      </div>
      
      {tasks.map((task, index) => (
        <div className="flex justify-center mt-4" key={index}>
          <Task taskValue={task.value} taskDelete={()=>handleDeleteTask(index)}/>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
