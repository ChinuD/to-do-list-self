import React, { useState } from "react";

function TaskInput({ inputTask, setInputTask }) {
  return (
    <input
      type="text"
      value={inputTask}
      onChange={(e) => setInputTask(e.target.value)}
      placeholder="Task..."
      className="bg-yellow-200 w-full border rounded-sm p-2"
    />
  );
}

function AddButton({ onClick }) {
  return (
    <button onClick={onClick} className="bg-red-400 px-4 rounded-sm">
      Add
    </button>
  );
}

function AddTask({ onAddTask }) {
  const [inputTask, setInputTask] = useState("");

  const handleAddTask = () => {
    if (!inputTask) return;
    onAddTask(inputTask);
    setInputTask("");
  };

  return (
    <div className="w-[400px] h-[60px] border-none bg-white flex p-2 rounded-sm justify-between gap-3">
      <TaskInput inputTask={inputTask} setInputTask={setInputTask} />
      <AddButton onClick={handleAddTask} />
    </div>
  );
}

export default AddTask;
