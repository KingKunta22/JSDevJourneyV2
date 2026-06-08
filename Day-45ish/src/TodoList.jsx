// // Will be doingg this without anyy help omgogmogmgomgomogmoqwm0rioqmrqwlp
// // I feel like I can't finish this and can only finish like 10% XD
// import { useState } from "react"

// function TodoList() {

//     const [tasks, setTask] = useState(['Hello', 'Worlddd', 'WRDDDDDD']);

//     function handleAddTask() {
//         // tasks = tasks.value // DAMN I AM SO LOST IDK WHAT TO DO COMPLETELY, IM JUST TRYING HARD
//         // console.log(tasks.value) // Why does this return undefined...
//         // console.log(tasks.textContent) // This one as well.... should I use index?
//         // Okay let me try this approach..
//         // let userTask = document.getElementById(inputValue)
//         // console.log(userTask);
//         // Bruh it returned null...
//         // let userTask = document.getElementById("inputValue")
//         // console.log(userTask)
//         // console.log(document.getElementById("inputValue").value)

//         // YEY, AFTER A FEW TRIAL AND ERRORS IT WORKS ON THIS ONE, IDK WHY IT DOESNT WORK WHEI DECLARED IT WITH let userTask tho, its the same...
//         let userTask = document.getElementById("inputValue").value
//         // console.log('This part workss')
//         // console.log(userTask)
//         // Okay, so I should slow things down because the reasojn why I thought it wasn;'t working was because even tho I refreshed it it kinda lagged so I thought it wasn't working lol, theres no live option for ts????? Anyways... good ez progress...
//         // setTask(userTask) /// BROOO WHY ISN'T THIS WORKING.....
//         // OH MY GOD I FORGOT TO ADD THE useState on my const [tasks, setTask] = useState["Hello", "MF", //"Third Task"]; :DDDDDDDDDDDDDDDDDDDDDDDDDDD HAYSSSSSSS I HOPE IT WORKS THIS TIME
//         // AND OF COURSE I MISSED THE () :))))
//         setTask('userTask')
//         // console.log(setTask) // XD Thought this would work to see whats being added to the array...
//         // console.log('2222 This part workss')
//         // Wait, so I just added the console logs and it works, only the submission doesnt work?
//     }

//     function handleDeleteTask(index) { // I remembered I have to use index for this one, but idk whats next XD
//         tasks.filter((task) => task.index != index) // Yea idk what im doing ngl
//     }

//     return(
//         <>
//             <h1>Todo List (Vibe-code Free)</h1>
//             <div>
//                 <input type="text" placeholder="Enter a task" id="inputValue"/>
//                 <button onClick={handleAddTask}>Add</button>
//             </div>
//             {/* This is for the tasks */}
//             <ol> {/* I literally forgot how to use maps now inside a component...
//             Okay, so I had like "tasks.map is not a function error, now it got fixed afgter doing useState([]) LOLLLLLL SO THAT MEANS I GOT THE MAP FUNCTION THE FIRST TRY REZEZEZEZ.... */}
//                 {tasks.map((task, index) =>
//                     <li key={index}>{ task } <button onClick={handleDeleteTask}>X</button></li>
//                 )}
//             </ol>
//             {/* OH OKAY NEVERMIND I STILL HAVE IT WHEN I CLICK THE ADD BUTTON..... */}
//         </>
//     )
// }

// // okay, i give up, i feel like im gonna stuck here forever if i dont send this to u...
// export default TodoList

// Okay, I'll try recreating it so that I can master it at the back of my mind...

import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["Word", "worrddd", "Wroododd"]);

  function handleAddTask() {
    let userTask = document.getElementById("inputTask").value
    // console.log(userTask)
    // setTasks(...tasks, userTask) // I hope this is what u meant by what you said :D
    // Bruh, i'm still getting the same errrorr.... tasks.map is not a function
    /// OHHHH, I JUST LOOKED UP YOUR TIP AND THEN I REALIZED I NEED TO ADD []
    setTasks([...tasks, userTask])
    // Alright, now I need theeeee reset part (.innerHTML = "")
    // userTask.innerHTML = "" // Bruh why wont this work and the .value as well...
    // document.getElementById("inputTask").innerHTML("")
    // YE IDK WHATEVER... AT LEAST THE ADD IS NOW WOPRKING
  }

  function handleDeleteTask(index) {
    tasks.filter((task, currentIndex) => {
        // currentIndex !== index
        // console.log(currentIndex) // OKAY SO THIS WORKSS.....
        // Wait, let me try this...
        // if(currentIndex + 1 === index) {
        //     return currentIndex 
        // } /// LOL THIS DOESNT WORK EITHER, IM SO CONFUSED ABOUT THE AFTER => WHEN USING ARRAY METHODS HERE BECAUSE SHOULD  I USE {} OR () OR LEAVE IT BLANK OR NOT USE RETURN OR WHATEVER BECAUSE I JUST KNOW SYNTAX IS THE PROBLEM HERE... BECAUSE THE CONSOLE WORKED
        // console.log(index),
        // console.log(currentIndex)
        // If tjhats the case theen this should work:
        currentIndex !== index
        // Bruh why is it not working....
        // console.log(tasks) It really doesnt filtert it outttt whyyyyy
        // WAIT, DO I NEED TO USE LI TAGS FOR TS??????????????? K LET ME TRY
        return <li>{task}</li> // YEAAAAAAAAAAA IDKKKKKKKKKKKKKKKKKKKKKK WQUOTNQMPOK
    })
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
            // <li key={index}>{task} <button onClick={(index) => handleDeleteTask}>X</button></li> // Is this how the delete onclick shoudl be?
            <li key={index}>{task} <button onClick={() => handleDeleteTask(index)}>X</button></li>

        ))}
      </ol>
    </>
  );
}

export default TodoList