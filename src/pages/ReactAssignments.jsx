import { useNavigate } from "react-router-dom";

const ReactAssignments = () => {
  const navigate = useNavigate();

  const assignments = [];
  for (let i = 25; i <= 30; i++) {
    assignments.push(i);
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

     
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        React Assignments 📘
      </h1>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {assignments.map((num) => (
          <div
            key={num}
            onClick={() => navigate(`/react/${num}`)}
            className="bg-white rounded-2xl shadow-md p-6 cursor-pointer 
            transform transition duration-300 hover:scale-105 hover:shadow-xl 
            border border-gray-200 flex flex-col items-center justify-center"
          >
           
            <div className="text-4xl font-bold text-indigo-600 mb-2">
              {num}
            </div>

           
            <div className="text-gray-700 font-medium">
              React Assignment
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ReactAssignments;