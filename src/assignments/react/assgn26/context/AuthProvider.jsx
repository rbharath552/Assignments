import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);



  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

 

  const handleRegister = (data) => {
    const oldUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isExist = oldUsers.find((u) => u.email === data.email);

    if (isExist) {
      alert("User already exists");
      return false;
    }

    const updatedUsers = [...oldUsers, data];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registered successfully");
    return true;
  };



  const handleLogin = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (!validUser) {
      alert("Invalid credentials");
      return false;
    }

    localStorage.setItem("loggedUser", JSON.stringify(validUser));
    setUser(validUser);

    return true;
  };



  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };


  return (
    <>
      <AuthContext.Provider
        value={{ user, handleRegister, handleLogin, handleLogout }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
export default AuthProvider;