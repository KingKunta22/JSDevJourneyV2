import React, { useState } from "react";

function ObjectsInState() {
  const [car, setCar] = useState({
    year: 2026,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event) {
    
  }

  function handleMakeChange(event) {
    
  }

  function handleModelChange(event) {
    
  }

  return (
    <>
      <div>
        <h1>
          My car is a: {car.year} {car.make} {car.model}
        </h1>
        <input type="number" value={car.year} onChange={handleYearChange} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <br />
        <input type="text" value={car.model} onChange={handleModelChange} />
      </div>
    </>
  );
}

export default ObjectsInState;
