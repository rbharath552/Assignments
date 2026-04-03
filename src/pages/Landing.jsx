import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">

     
      <h1 className="text-4xl font-bold text-gray-800 mb-12">
        MERN Stack 🚀
      </h1>

      
      <div className="flex flex-wrap gap-8 justify-center">

        
        <div
          onClick={() => navigate("/react")}
          className="w-64 h-40 bg-gradient-to-r from-green-400 to-green-600 text-white 
          rounded-2xl shadow-lg flex items-center justify-center text-2xl font-semibold 
          cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          React
        </div>

       
        <div
          onClick={() => navigate("/node")}
          className="w-64 h-40 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white 
          rounded-2xl shadow-lg flex items-center justify-center text-2xl font-semibold 
          cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          Node
        </div>

       
        <div
          onClick={() => navigate("/express")}
          className="w-64 h-40 bg-gradient-to-r from-purple-400 to-purple-600 text-white 
          rounded-2xl shadow-lg flex items-center justify-center text-2xl font-semibold 
          cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          Express
        </div>

       
        <div
          onClick={() => navigate("/mongo")}
          className="w-64 h-40 bg-gradient-to-r from-orange-400 to-orange-500 text-white 
          rounded-2xl shadow-lg flex items-center justify-center text-2xl font-semibold 
          cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          MongoDB
        </div>

      </div>
    </div>
  );
};

export default Landing;