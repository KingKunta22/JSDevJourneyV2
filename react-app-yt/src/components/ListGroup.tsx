// import { Fragment } from 'react';
// import { MouseEvent } from "react";
import { useState } from "react";

function getMessage() {
  return <p>Sample Message</p>;
}

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //   const selectedItem = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   // Event Handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1 className="text-4xl font-bold">{heading}</h1>
      {items.length === 0 && getMessage()}
      <ul className="w-64 rounded-lg border border-zinc-200 bg-white divide-y divide-zinc-200 overflow-hidden">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "px-4 py-2 hover:bg-zinc-50 cursor-pointer text-white bg-blue-600 font-semibold"
                : "px-4 py-2 hover:bg-zinc-50 cursor-pointer"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
