import { useState, useMemo } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  // Generate 5000 names (static)
  const names = useMemo(() => {
    console.log("Generating names...");
    return Array.from({ length: 5000 }, (_, i) => `User_${i + 1}`);
  }, []);

  // Filter using useMemo (runs only when search OR names change)
  const filteredNames = useMemo(() => {
    console.log("Filtering executed...");
    return names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, names]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-300 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Name Search (5000 Users)</h1>

      {/* Controls */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-xl border outline-none text-black"
        />

        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600"
        >
          Toggle Theme
        </button>
      </div>

      {/* Results */}
      <div className="h-[400px] overflow-y-auto p-4 rounded-xl shadow bg-white/70 backdrop-blur-md">
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => (
            <p key={index} className="py-1 border-b border-gray-300">
              {name}
            </p>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;