import { useRef } from "react";

const SearchForm = () => {
  const searchRef = useRef();

  const handleSearch = () => {
    alert(searchRef.current.value);
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl mb-2">Search</h2>

        <input
          ref={searchRef}
          type="text"
          placeholder="Search..."
          className="border p-2 mr-2"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchForm;