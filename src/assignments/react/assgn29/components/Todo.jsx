import React, { useReducer, useState } from "react";

const Todo = () => {
  const initialState = {
    todos: [],
    editIndex: null,
    editText: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [...state.todos, action.payload], // add → push
        };

      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter((_, i) => i !== action.payload), // delete by index
        };

      case "EDIT_TODO":
        return {
          ...state,
          editIndex: action.payload,
          editText: state.todos[action.payload], // load data
        };

  
    case "UPDATE_TODO":
  return {
    ...state,
    todos: state.todos.map((todo, i) =>
      i === state.editIndex ? action.payload : todo
    ),
    editIndex: null,
    editText: "",
  };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;

    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  const handleUpdate = () => {
    if (!state.editText.trim()) return;

    dispatch({ type: "UPDATE_TODO", payload: state.editText });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>

      {/* Add Todo */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo"
          className="border px-3 py-2 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="w-full max-w-md space-y-2">
        {state.todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-3 rounded shadow"
          >
            <span>{todo}</span>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  dispatch({ type: "EDIT_TODO", payload: index })
                }
                className="bg-yellow-400 px-2 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: index })
                }
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Edit Section */}
      {state.editIndex !== null && (
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={state.editText}
            onChange={(e) =>
              dispatch({
                type: "SET_EDIT_TEXT",
                payload: e.target.value,
              })
            }
            className="border px-3 py-2 rounded"
          />

          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};
export default Todo;