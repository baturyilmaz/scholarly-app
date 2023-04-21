import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticle } from '../lib/api/api';
import { Result } from '../types/ArticleResponse';

function ArticlePage() {
  const [article, setArticle] = useState<Result>();
  const { id } = useParams();

  useEffect(() => {
    async function getArticleResults() {
      try {
        const data = await getArticle(id);
        setArticle(data.resultList.result[0]);
      } catch (e) {
        const error = e as Error;
        console.log(error);
      }
    }

    getArticleResults();
  }, [id]);

  return (
    <>
      <article className="container mx-auto my-8 px-4 w-full bg-dark rounded-lg shadow-md p-6">
        <section className="mb-8 border-b-2 border-b-gray-700 pb-4">
          <h5 className="text-gray-300 font-semibold my-2">
            Author(s): {article?.authorString}
          </h5>
          <h5 className="text-gray-300 font-semibold my-2">
            Publication Date: {article?.pubYear}
          </h5>
          <h5 className="text-gray-300 font-semibold my-2">
            URL:{' '}
            <a
              className="hover:text-gray-100"
              href={article?.fullTextUrlList.fullTextUrl[0].url}
              target="_blank"
            >
              {article?.fullTextUrlList.fullTextUrl[0].url}
            </a>
          </h5>
        </section>
        <header className="mb-8">
          <h4 className="text-3xl font-semibold">Title: {article?.title}</h4>
        </header>
        <section className="mb-8">
          <h6 className="text-lg font-semibold mb-4">Abstract</h6>
          <p className="text-gray-300 leading-relaxed text-justify">
            {article?.abstractText}
          </p>
        </section>
      </article>
      <div className="form-list container mx-auto px-4 mb-10">
        <form className="bg-gray-800 text-gray-300 rounded-lg py-4 px-8 flex justify-center items-center">
          <select
            name="pets"
            id="pet-select"
            className="bg-gray-700 text-gray-300 py-2 px-4 rounded-md mr-4 flex-1"
          >
            <option className="bg-gray-700" value="">
              --Choose a list to add--
            </option>
            <option className="bg-gray-700" value="dog">
              Dog
            </option>
            <option className="bg-gray-700" value="cat">
              Cat
            </option>
            <option className="bg-gray-700" value="hamster">
              Hamster
            </option>
            <option className="bg-gray-700" value="parrot">
              Parrot
            </option>
            <option className="bg-gray-700" value="spider">
              Spider
            </option>
            <option className="bg-gray-700" value="goldfish">
              Goldfish
            </option>
          </select>
          <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-md flex-1">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default ArticlePage;
