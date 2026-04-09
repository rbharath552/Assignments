import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Lazy loaded components
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));

const Lazy= () => {
  return (
    
      <div className="p-6 flex-col flex items-center justify-center">
        {/* Navigation */}
        <nav className="flex gap-4 mb-6">
          <Link to="/Home" className="text-blue-500">Home</Link>
          <Link to="/About" className="text-blue-500">About</Link>
          <Link to="/Dashboard" className="text-blue-500">Dashboard</Link>
        </nav>

        {/* Suspense Wrapper */}
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </div>
    
  );
};

export default Lazy;