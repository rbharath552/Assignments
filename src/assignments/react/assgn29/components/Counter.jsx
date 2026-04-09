import React, { useReducer, useState } from "react";

const Counter = () => {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };

      case "RESET":
        return initialState;

      case "INCREMENT_BY_VALUE":
        return { count: state.count + action.payload };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
      <h1 className="text-3xl font-bold">Counter App</h1>

      <h2 className="text-2xl">Count: {state.count}</h2>

      <div className="flex gap-3">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          +1
        </button>

        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          -1
        </button>

        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg"
        >
          Reset
        </button>
      </div>

      <div className="flex gap-3">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="border px-3 py-2 rounded-lg"
          placeholder="Enter value"
        />

        <button
          onClick={() =>
            dispatch({ type: "INCREMENT_BY_VALUE", payload: value })
          }
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add Value
        </button>
      </div>
    </div>
  );
};

export default Counter;