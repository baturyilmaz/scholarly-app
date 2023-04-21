import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [search, setSearch] = useState('');
  // const { setSearchedValue } = useContext(AppContext);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // setSearchedValue(search);
    // console.log(search);
    if (search.trim()) {
      navigate(`/search/${search}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full md:w-3/4 mb-4 md:mb-0">
      <input
        type="search"
        placeholder="Search article"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full py-2 px-4 bg-gray-800 text-gray-300 rounded-l-md transition duration-300 focus:outline-none focus:border-transparent focus:bg-gray-900"
      />
      <button className="bg-gray-800 w-1/4 text-white flex items-center justify-center py-2 px-4 rounded-r-none md:rounded-r-md hover:bg-gray-900 transition duration-300">
        <FiSearch />
      </button>
    </form>
  );
}

export default SearchForm;
