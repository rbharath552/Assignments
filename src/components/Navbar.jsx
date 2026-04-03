import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-amber-300 text-red-600 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold mx-10">
        <h1>RAJ BHARATH</h1>
      </div>
      <div className="flex gap-4 mx-7">
        <Link to="/">Home</Link>

        <Link to="/react">React Assignments</Link>

        <Link to="/node">Node</Link>

        <Link to="/express">Express</Link>

        <Link to="/mongo">Mongodb</Link>
      </div>
    </div>
  );
};

export default Navbar;