import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["Eat", "Drink Water", "Exercise"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button className="add-button" onClick={addTask}>
        Add
      </button>
      <ol>
        {tasks.map((task, index) => (
          // return task(index)
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Move Up
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
