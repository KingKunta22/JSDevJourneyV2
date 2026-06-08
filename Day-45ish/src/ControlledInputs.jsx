import { useState } from "react";

function ControlledInputs() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
  //   const [inputValue, setInputValue] = useState(
  //     document.getElementById("inputTask").value,
  //   ); //Should this be it?
  // That looks wrong XDDD
  const [inputValue, setInputValue] = useState("");

//   function handleAddTask() {
//     inputValue = document.getElementById("inputTask").value;
//     setTasks([...tasks, inputValue]);
//   } THIOS DOESNT WORK EITHER XD

  function handleAddTask() {
    let userTasks = document.getElementById("inputTask").value;
    setTasks([...tasks, userTasks]);
  }

  function handleDeleteTask(index) {
    const updatedTasks = tasks.filter(
      (task, currentIndex) => currentIndex !== index,
    );
    setTasks(updatedTasks);
  }

  return (
    <>
      <h1>Todo List (Vibe-Code Free)</h1>
      <div>
        <input type="text" placeholder="Enter a task" id="inputTask" />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDeleteTask(index)}>X</button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ControlledInputs;
