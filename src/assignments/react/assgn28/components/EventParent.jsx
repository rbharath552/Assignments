import { useState, useCallback } from "react";

import EventChild from "./EventChild";

const EventParent = () => {
  const [dark, setDark] = useState(false);

  // useCallback → function reference stays SAME
  const calculateSquare = useCallback((num) => {
    let result = 0;

    // square using loop (sum of odd numbers)
    for (let i = 0; i < num; i++) {
      result += num;
    }

    return result;
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-6 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold">Parent Component</h1>

      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 bg-purple-500 text-white rounded-xl"
      >
        Toggle Theme
      </button>

      {/* Passing function to child */}
      <EventChild calculateSquare={calculateSquare} />
    </div>
  );
};

export default EventParent;