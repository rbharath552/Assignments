import { useState, useMemo } from "react";

const Sorting = () => {
  const [array, setArray] = useState([]);
  const [dark, setDark] = useState(false);

  // Generate random array
  const generateArray = () => {
    const newArray = Array.from({ length: 8 }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(newArray);
  };

  // useMemo for sorting (runs only when array changes)
  const sortedArray = useMemo(() => {
    console.log("Sorting executed...");
    return [...array].sort((a, b) => a - b);
  }, [array]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold">Random Array Sorter</h1>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={generateArray}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600"
        >
          Generate Array
        </button>

        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600"
        >
          Toggle Theme
        </button>
      </div>

      {/* Original Array */}
      <div className="p-4 rounded-xl shadow bg-white/70 backdrop-blur-md">
        <h2 className="font-semibold">Original Array:</h2>
        <p>{array.join(", ") || "Click Generate"}</p>
      </div>

      {/* Sorted Array */}
      <div className="p-4 rounded-xl shadow bg-white/70 backdrop-blur-md">
        <h2 className="font-semibold">Sorted Array:</h2>
        <p>{sortedArray.join(", ") || "No data"}</p>
      </div>
    </div>
  );
};

export default Sorting;