import { FiSearch, FiBookmark, FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submitted.');
  }

  return (
    <div className="bg-transparent py-4 px-4 md:px-8 shadow-md border-b border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <form
            onSubmit={handleSubmit}
            className="flex w-full md:w-3/4 mb-4 md:mb-0"
          >
            <input
              type="search"
              placeholder="Search"
              className="w-full py-2 px-4 bg-gray-800 text-gray-300 rounded-l-md transition duration-300 focus:outline-none focus:border-transparent focus:bg-gray-900"
            />
            <button className="bg-gray-800 w-1/4 text-white flex items-center justify-center py-2 px-4 rounded-r-none md:rounded-r-md hover:bg-gray-900 transition duration-300">
              <FiSearch />
            </button>
          </form>
          <div className="w-full md:w-1/4 flex justify-center sm:justify-end">
            <Link
              to="/saveds"
              className="text-gray-300 flex items-center hover:text-gray-400 mr-4 transition duration-300"
            >
              <FiBookmark className="mr-1 text-2xl hover:text-gray-400 transition duration-300" />
            </Link>
            <Link
              to="/lists"
              className="text-gray-300 flex items-center hover:text-gray-400 transition duration-300"
            >
              <FiList className="mr-1 text-2xl hover:text-gray-400 transition duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
