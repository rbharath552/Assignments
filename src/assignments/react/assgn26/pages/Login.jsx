import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  //context
  const { handleLogin, user } = useContext(AuthContext);

  //navigate
  const navigate = useNavigate();

  //single state handle all inputs
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //handle inputs and to store in a object using [objkey]: value
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //what and all happens after dorm submitted
  const handleSubmit = () => {
    //validations
    if (!form.email || !form.password) {
      alert("All fields required");
      return;
    }

    if (!form.email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    //sending this state to handle login - where login logics handled
    const success = handleLogin(form);
  };

  // 🔒 If already logged in → go dashboard
  useEffect(() => {
    if (user) {
      navigate("/react/27/dashboard");
    }
  }, [user]);

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl mb-2">Login</h2>

        {/* 🧠 UX guidance */}
        <p className="text-sm mb-4 text-gray-600">Use registered email</p>

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="border p-2 block mb-2"
        />

        <p className="text-sm mb-4 text-gray-600">Password min 6 characters</p>
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="border p-2 block mb-2"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Login
        </button>

        {/* 🔁 Navigate to register */}
        <p className="mt-3 text-sm">
          Not registered?{" "}
          <Link to="/react/27/register" className="text-blue-500">
            Create account
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;