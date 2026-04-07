import { useState } from "react";
import React from "react";

// React.memo → prevents unnecessary re-render
const  EventChild = ({ calculateSquare }) => {
  console.log("Child Rendered");

  const [num, setNum] = useState(0);

  return (
    <div className="p-6 bg-white shadow rounded-xl text-black">
      <h2 className="font-semibold mb-2">Child Component</h2>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
        className="border px-3 py-2 rounded mb-2"
      />

      <p>Square: {calculateSquare(num)}</p>
    </div>
  );
};

export default React.memo(EventChild);