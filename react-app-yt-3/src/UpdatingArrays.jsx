import React, { useState } from "react";

function UpdatingArrays() {
  const [foods, setFood] = useState(["Apple", "Orange", "Strawberry", "Mango"]);

  function handleAddFood() {
    let userInput = document.getElementById("foodInput").value
    document.getElementById("foodInput").value = ""

    setFood([...foods, userInput])
  }

  function removeFood() {

  }

  return (
    <>
      <div>
        <h2>Lists of Food</h2>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>{food} </li>
          ))}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </>
  );
}

export default UpdatingArrays;
