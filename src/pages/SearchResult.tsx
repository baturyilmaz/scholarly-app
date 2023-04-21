import { useParams } from 'react-router-dom';
import SearchCard from '../components/SearchCard';
import { useEffect, useState } from 'react';
import { getResultList } from '../lib/api/api';
import { Result } from '../types/SearchResponse';

function SearchResults() {
  const [articles, setArticles] = useState<Result[]>([]);
  const [nextPage, setNextPage] = useState('');
  const { query } = useParams();

  console.log(nextPage);

  useEffect(() => {
    async function getSearchResults() {
      try {
        const data = await getResultList(query);
        setNextPage(data.nextPageUrl);
        setArticles(data.resultList.result);
      } catch (e) {
        const error = e as Error;
        console.log(error);
      }
    }

    getSearchResults();
  }, [query]);

  return (
    <>
      <div className="container mx-auto my-8 px-2 sm:px-0">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-4 border-gray-700">
          Search results for: {query}
        </h2>
        <ul>
          {articles &&
            articles.map((article) => (
              <li key={article.id}>
                <SearchCard article={article} />
              </li>
            ))}
        </ul>
        <div className="flex justify-center">
          <nav className="block">
            <ul className="flex pl-0 rounded list-none flex-wrap">
              <li>
                <a
                  href="#"
                  className="block hover:text-white hover:bg-blue-600 text-blue-600 border border-solid border-blue-600 hover:border-blue-500 px-3 py-3 rounded-lg"
                >
                  Prev
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-white hover:bg-blue-600 text-blue-600 border border-solid border-blue-600 hover:border-blue-500 px-3 py-3 rounded-lg"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
