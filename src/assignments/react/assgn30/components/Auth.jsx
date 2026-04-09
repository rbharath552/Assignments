import React, { createContext, useContext, useReducer, useState } from "react";

// 1. Create Context
const AuthContext = createContext();

// 2. Reducer
const initialState = {
  user: null,
  isLoggedIn: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
        isLoggedIn: true,
      };

    case "LOGOUT":
      return {
        user: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
}

// 3. Provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// 4. Custom Hook
const useAuth = () => useContext(AuthContext);

// 5. Login Component
const Login = () => {
  const { dispatch } = useAuth();
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name.trim()) return;

    dispatch({
      type: "LOGIN",
      payload: { name },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h2 className="text-2xl font-bold">Login</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 rounded"
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

// 6. Dashboard Component
const Dashboard = () => {
  const { state, dispatch } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">
        Welcome, {state.user?.name}
      </h1>

      <button
        onClick={() => dispatch({ type: "LOGOUT" })}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

// 7. App (Conditional Rendering)
const App = () => {
  const { state } = useAuth();

  return state.isLoggedIn ? <Dashboard /> : <Login />;
};

// 8. Root Export
const Auth = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default Auth;