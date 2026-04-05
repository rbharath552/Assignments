import { useState } from "react";

const Prime = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");


  const isPrime = (n) => {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
     
      for (let j = 0; j < 50000; j++) {
        Math.sqrt(j);
      }

      if (n % i === 0) return false;
    }

    return true;
  };

  const handleCheck = () => {
    const number = Number(num);

    if (!number) {
      setResult("Please enter a valid number");
      return;
    }

    const prime = isPrime(number);
    setResult(prime ? "Prime Number" : "Not a Prime Number");
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
    
    <h2 className="text-2xl font-bold mb-6 text-gray-800">
      Prime Number Checker
    </h2>

    <input
      type="number"
      value={num}
      onChange={(e) => setNum(e.target.value)}
      placeholder="Enter number"
      className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      onClick={handleCheck}
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
    >
      Check Prime
    </button>

    <p className="mt-4 text-lg text-gray-700">
      {result}
    </p>

  </div>
</div>
  );
};

export default Prime;