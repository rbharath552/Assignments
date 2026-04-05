import { useState, useMemo } from "react";

const ArrayFiltering = () => {
  const [numbers, setNumbers] = useState(() =>
    Array.from({ length: 10000 }, () =>
      Math.floor(Math.random() * 10000)
    )
  );

  const generateArray = () => {
    const arr = Array.from({ length: 10000 }, () =>
      Math.floor(Math.random() * 10000)
    );
    setNumbers(arr);
  };

  const sum = useMemo(() => {
    return numbers
      .filter((n) => n % 2 === 0)
      .reduce((a, b) => a + b, 0);
  }, [numbers]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
    
    <button
      onClick={generateArray}
      className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-200"
    >
      Regenerate Array
    </button>

    <p className="mt-6 text-lg text-gray-700 font-medium">
      Sum of even numbers: {sum}
    </p>

  </div>
</div>
  );
};

export default ArrayFiltering;