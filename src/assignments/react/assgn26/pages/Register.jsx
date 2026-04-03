import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  //context
  const { handleRegister, user } = useContext(AuthContext);

  //navigate
  const navigate = useNavigate();

  //state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  //handle inputs in single state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Basic validation rules
    if (!form.name || !form.email || !form.password || !form.confirm) {
      alert("All fields required");
      return;
    }

    if (form.name.length < 3) {
      alert("Name must be at least 3 characters");
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

    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }

    //context logic
    const success = handleRegister(form);
    if (success) {
      navigate("/react/27/dashboard");
    }
  };

  // // 🔒 If already logged in → go dashboard
  // useEffect(() => {
  //   if (user) {
  //     navigate("/react/27/dashboard");
  //   }
  // }, [user]);

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl mb-2">Register</h2>

        {/* 🧠 UX guidance */}

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          className="border p-2 block mb-2"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="border p-2 block mb-2"
        />

        <p className="text-sm mb-4 text-gray-600">Password min 6 chars</p>
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="border p-2 block mb-2"
        />
        <input
          name="confirm"
          value={form.confirm}
          onChange={handleChange}
          type="password"
          placeholder="Confirm Password"
          className="border p-2 block mb-2"
        />

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2"
        >
          Register
        </button>

        {/* 🔁 Navigate to login */}
        <p className="mt-3 text-sm">
          Already have an account?{" "}
          <Link to="/react/27/" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;