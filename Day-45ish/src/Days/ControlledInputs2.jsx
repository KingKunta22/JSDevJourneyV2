// // Hehehehe, I was about to do the maxlength XDDD nonetheless Im gonna do the conditional one which you want me to do heheheehe

// import { useState } from "react";

// function ControlledInputs2() {
//   const [input, setInput] = useState("");

//   // Okay, how should I do this XD, how should I even have a function that counts all characters?? Loop??
//   // Alright, so doing this here outside the return() will hit two stones in one stone: Not showing at the h1 and not allowing the user to put 10 characters backend, sooo.... damnnn this is confusing and hard

//   // Okay, since I have zxero idea about how I should approach this, I looked up how to count each characters in a string, soo let me try... TAKE NOTE; I DIDNT ASK AN AI ABOUT HOW TO COMPLETELY DO THIS OKAY............

//   // SOOOO, I SHOULD MOVE THE ONCHANGE VALUE INSIDE A FUNCTION TO HAVE EVERYTHING INSIDE IT AND THEN JUST CALL IT ON THE onChange inside the input tag...

//   // function handleSetInput(e) {
//   //     let characters = input.length

//   //     setInput(e.target.value)

//   // }
//   // Oh damn, this is hard...

//   //   function handleSetInput(e) {
//   //     let characters = input.length;

//   //     console.log(input)
//   //     console.log(characters)

//   //     setInput(input);
//   //   }

//   // Okay, so I am still confused but theres a new bug so its a new progress... I wonder why the numbers aren';t uypodating, and its not showing the characters, its only showing the number every onChange

// //   function handleSetInput(e) {
// //     setInput(input);

// //     let characters = input.length;

// //     console.log(input.value);
// //     console.log(characters);
// //   }

//   // Damn, I think I give up, evne htough I only spent like around 15-20 minutes doing this, I don;'t thuink i can progress further because I just don't understand what I am doing and what I have todo. So I am confused about the onChange={(e) => handleSetInput(e.target.value)}, the input, the setInput, and how to count the characters in a string and msot importantly, whats the best approach to calling the function on an onChange inside an input, and then the value {input} as well....... I'll try doing the part 4

//   const [characters, setCharacters] = useState(""); // Also, can I disregard the "" if I amn gionna do a number or int....

//   // Oh, can I put another onChange inside the same input? That sounds wrong but...

//   function handleSetCharacter() {
//     // Ohhh, it's kinda working because the console log is kinda workingg.... It's just not rendering anything I type.... Ohhh, it works when I remove the value={input}. I wonder why....
//     // Sooo this should work huh...
//     // let characterCount = input.length
//     // characterCount++ // Uhh, I'm so stupid whatever../ lwhta about this...
//     // let characterCount = input.length + 1 // Same thing, Im stupid XDDD
//     // Shouldn't it change everytime I type something because I
//     // console.log(characterCount) // Wait, why is this only showing 0 everytime...
//     let characterCount = input.length
//     // setCharacters(characterCount + input.length)
//     setCharacters(characterCount)

//     // Okay, so i am crazy conjfused rnnn and Idk hehehe, I just need help whatever ,I did my best...
//   }

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//         //   value={input}
//         //   onChange={(e) => handleSetInput(e.target.value)}
//           onChange={(e) => setInput(e.target.value)}
//           onChange={(e) => handleSetCharacter()}
//         />
//         <h1>{input}</h1>
//         <p>Characters: {characters}/10</p>
//       </div>
//     </>
//   );
// }

// export default ControlledInputs2;

// // Q1: Oh, you're right. I jsut checked and removed the value input and it didn't change anything. But I believe I need this in order for the state to understand that the value inside the input should be the same as the h1? Orrrrrr it allows me to have control over what should be the input (like for example, what you asked me to do: only 10 characters maximum), so that gives me control in the back-end without having to use maxlength and let react know that this should be the condition or whatever...

// // Q2: I believe because it's react way of simplifying this scenario:
// // cart = addItem(cart, item)
// // renderCart(),
// // So what I am saying is that, it's reacts feature to simplify state management...

// // Q3: Damn, I don't really know but, let me try... I think it is because state is where we should get the original data from.

// // PART 3: Same thing: "HelloWorldReactIsFun". Unless, I have a condition that it should only be 10 max characters, then it should only contain: "HelloWorl

// // PART 4: For the part 4, I did change it above so, you just check it xdd

// import { useState } from "react";

// function ControlledInputs2() {
//   const [input, setInput] = useState("");

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         {/* Why do we not need/need the value={input} again? I forgot XD */}
//         <h1>{input}</h1>
//         <p>Characters: {input.length}/9999</p>
//         {/* You helped me simplify it sooo, I was overcomplicating itttt but I get the idea.. */}
//       </div>
//     </>
//   );
// }

// export default ControlledInputs2;

// MATTER OF FACT, LET ME TRY THE LIMIT YOU ASKED ME A WHILE AGO...

// import { useState } from "react";

// function ControlledInputs2() {
//   const [input, setInput] = useState("");
//   // Or should I put the condtional statement here???/
//   // Or I'm oversimplifying it this time and I need a function to put the condtional statement into?

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         //   Can I put a conditional statement here???
//         />
//         <h1>You typed: {input}</h1>
//         <p>Characters: {input.length}/10</p>
//       </div>
//     </>
//   );
// }

// export default ControlledInputs2;

// // MATTER FACT, I CANT DO IT SO, WHATEVER, XDDDDDDDDDDDDDDDDDDDDDDDDD I GIVE UP, AT LEAST I GOT WHAT U WANTED

// OKAY GREAT, ITS CLEARER NOW, THANKS:

// import { useState } from "react";

// function ControlledInputs2() {
//   const [input, setInput] = useState("");

//   //   function handleChange() {
//   //     if (input.length < 10) {
//   //       setInput(input);
//   //     }
//   //   }
//   // Okay so I'm guessing the reaosn why this is not working becaause im not utiizing the e or e.target.value???

//   function handleChange() {

//     // if (input.length < 10) {
//     //   console.log(input)
//     //   setInput(input);
//     // }
//     setInput(input)

//     // LOL EVEN JUST setInput(input) diesnt work either wtf is wrongggg.....
//   }

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//         //   value={input}
//           onChange={(e) => handleChange()} // Okay, so why are we not using e or e.target.value or (e) => or () => ???
//         />
//         <h1>You typed: {input}</h1>
//         <p>Characters: {input.length}/10</p>
//       </div>
//     </>
//   );
// }

// export default ControlledInputs2;

// Alright let me try....

import { useState } from "react";

function ControlledInputs2() {
  const [input, setInput] = useState("");

  //   function handleChange(e) {
  //     setInput(e.target.value)
  //   }

  // So since it didnt' work with this: (e) => handleChange(), when should we apply that on an onChange?
  // and when do we apply the onChange={handleChange}?

  // Okay the {handleChange} made it work, let me think again how can I put a condition... because I forgot everything...

  // Let metry this:

  function handleChange(e) {
    if (e.target.value.length < 10) {
      console.log("Lesser than 10 chars");
      setInput(e.target.value)
    } else {
        console.log("More than 10 chars")
    }
  }

  // Ohhhh okay it's working nowwwww. How did I do that though xd....

  return (
    <>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        <h1>You typed: {input}</h1>
        <p>Characters: {input.length}/10</p>
      </div>
    </>
  );
}

export default ControlledInputs2;
