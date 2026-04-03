import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import AuthProvider from "./context/AuthProvider";
import { AuthContext } from "./context/AuthContext";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";

const InnerApp = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

const Assgn26 = () => {
  return (
    <>
      <AuthProvider>
        <InnerApp />
      </AuthProvider>
    </>
  );
};

export default Assgn26;