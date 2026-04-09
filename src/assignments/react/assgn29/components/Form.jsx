import React, { useReducer } from "react";

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "SET_FIELD":
        return {
          ...state,
          [action.field]: action.value, // dynamic update
        };

      case "RESET_FORM":
        return initialState;

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", state);

    // reset after submit
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center">User Form</h2>

        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="border p-2 rounded"
        />

        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Enter Password"
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;