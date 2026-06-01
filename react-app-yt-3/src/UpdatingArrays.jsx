import React, { useState } from "react";

function UpdatingArrays() {
  const [foods, setFood] = useState(["Apple", "Orange", "Strawberry", "Mango"]);

  function handleAddFood() {}

  return (
    <>
      <div>
        <h2>Lists of Food</h2>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>{food} </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UpdatingArrays;
