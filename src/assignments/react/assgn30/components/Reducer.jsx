import React, { useReducer } from "react";

const Reducer= () => {
  const initialState = {
    items: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          items: [...state.items, action.payload], // add item
        };

      case "REMOVE_ITEM":
        return {
          ...state,
          items: state.items.filter(
            (item) => item.id !== action.payload
          ), // remove by id
        };

      case "CLEAR_CART":
        return {
          ...state,
          items: [],
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // calculate total price
  const total = state.items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>

      {/* Buttons to Add Items */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() =>
            dispatch({
              type: "ADD_ITEM",
              payload: { id: 1, name: "Phone", price: 20000 },
            })
          }
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Phone
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "ADD_ITEM",
              payload: { id: 2, name: "Laptop", price: 50000 },
            })
          }
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Laptop
        </button>
      </div>

      {/* Cart Items */}
      <ul className="w-full max-w-md space-y-2">
        {state.items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between bg-white p-3 rounded shadow"
          >
            <span>
              {item.name} - ₹{item.price}
            </span>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: item.id,
                })
              }
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Total */}
      <h2 className="text-xl font-semibold mt-6">
        Total: ₹{total}
      </h2>

      {/* Clear Cart */}
      {state.items.length > 0 && (
        <button
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          className="mt-4 bg-gray-700 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Reducer;