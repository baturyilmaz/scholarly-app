import { FiBookmark, FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

function Navbar() {
  return (
    <div className="bg-transparent py-4 px-4 md:px-8 shadow-md border-b border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <SearchForm />
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
