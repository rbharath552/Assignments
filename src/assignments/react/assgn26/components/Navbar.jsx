import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <>
      <div className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/react/27/dashboard">Dashboard</Link>

        <button onClick={handleLogout} className="ml-auto bg-red-500 px-3">
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;