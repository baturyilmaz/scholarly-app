import { useParams } from 'react-router-dom';
import SearchCard from '../components/SearchCard';

function SearchResults() {
  const { query } = useParams();
  return (
    <>
      <div className="container mx-auto my-8 px-2 sm:px-0">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-4 border-gray-700">
          Search results for: {query}
        </h2>
        <ul>
          <li>
            <SearchCard />
          </li>
          <li>
            <SearchCard />
          </li>
          <li>
            <SearchCard />
          </li>
          <li>
            <SearchCard />
          </li>
          <li>
            <SearchCard />
          </li>
        </ul>
      </div>
    </>
  );
}

export default SearchResults;
