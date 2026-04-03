import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="p-4">
        <h2>Welcome {user?.name}</h2>

        <p>Protected Dashboard</p>
      </div>
    </>
  );
};

export default Dashboard;