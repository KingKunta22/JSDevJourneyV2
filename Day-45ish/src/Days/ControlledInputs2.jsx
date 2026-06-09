// Hehehehe, I was about to do the maxlength XDDD nonetheless Im gonna do the conditional one which you want me to do heheheehe

import { useState } from "react";

function ControlledInputs2() {
  const [input, setInput] = useState("");

  // Okay, how should I do this XD, how should I even have a function that counts all characters?? Loop??
  // Alright, so doing this here outside the return() will hit two stones in one stone: Not showing at the h1 and not allowing the user to put 10 characters backend, sooo.... damnnn this is confusing and hard

  // Okay, since I have zxero idea about how I should approach this, I looked up how to count each characters in a string, soo let me try... TAKE NOTE; I DIDNT ASK AN AI ABOUT HOW TO COMPLETELY DO THIS OKAY............

  // SOOOO, I SHOULD MOVE THE ONCHANGE VALUE INSIDE A FUNCTION TO HAVE EVERYTHING INSIDE IT AND THEN JUST CALL IT ON THE onChange inside the input tag...

  // function handleSetInput(e) {
  //     let characters = input.length

  //     setInput(e.target.value)

  // }
  // Oh damn, this is hard...

  function handleSetInput(e) {
    let characters = input.length;

    setInput(e.target.value);
  }

  return (
    <>
      <div>
        <input type="text" value={input} onChange={() => handleSetInput()} />
        <h1>{input}</h1>
      </div>
    </>
  );
}

export default ControlledInputs2;

// Q1: Oh, you're right. I jsut checked and removed the value input and it didn't change anything. But I believe I need this in order for the state to understand that the value inside the input should be the same as the h1? Orrrrrr it allows me to have control over what should be the input (like for example, what you asked me to do: only 10 characters maximum), so that gives me control in the back-end without having to use maxlength and let react know that this should be the condition or whatever...

// Q2: I believe because it's react way of simplifying this scenario:
// cart = addItem(cart, item)
// renderCart(),
// So what I am saying is that, it's reacts feature to simplify state management...

// Q3: Damn, I don't really know but, let me try... I think it is because state is where we should get the original data from.

// PART 3: Same thing: "HelloWorldReactIsFun". Unless, I have a condition that it should only be 10 max characters, then it should only contain: "HelloWorl

// PART 4:
