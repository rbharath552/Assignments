import { useState } from "react";

const SumToN = () => {
  const [num, setNum] = useState("");
  const [sum, setSum] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔹 Heavy sum calculation
  const sumToN = (n) => {
    let total = 0;

    for (let i = 1; i <= n; i++) {
      // simulate heavy computation
      for (let j = 0; j < 50000; j++) {
        Math.sqrt(j);
      }

      total += i;
    }

    return total;
  };

  const handleCalculate = () => {
    const number = Number(num);

    if (!number || number < 1) {
      setSum("Enter a valid positive number");
      return;
    }

    setLoading(true);

   
    setTimeout(() => {
      const result = sumToN(number);
      setSum(result);
      setLoading(false);
    }, 0);
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
    
    <h2 className="text-2xl font-bold mb-6 text-gray-800">
      Sum from 1 to N
    </h2>

    <input
      type="number"
      value={num}
      onChange={(e) => setNum(e.target.value)}
      placeholder="Enter number"
      className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
    />

    <button
      onClick={handleCalculate}
      className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
    >
      Calculate Sum
    </button>

    {loading ? (
      <p className="mt-4 text-blue-500 font-medium">
        Calculating...
      </p>
    ) : (
      <p className="mt-4 text-lg text-gray-700">
        Result: {sum}
      </p>
    )}

  </div>
</div>
  );
};

export default SumToN;