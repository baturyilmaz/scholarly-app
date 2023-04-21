import { IconType } from 'react-icons';
import { Result } from '../types/SearchResponse';
import { Link } from 'react-router-dom';
// import { FiTrash } from 'react-icons/fi';

interface ArticleCardProps {
  article: Result;
  icon: IconType;
}

function ArticleCard({ icon: Icon, article }: ArticleCardProps) {
  return (
    <Link to={`/article/${article.id}`}>
      <div className="w-full bg-gray-900 rounded-lg shadow-md p-6 my-6 mx-auto hover:bg-gray-800 hover:cursor-pointer">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-xl">
              Title: {article.title}
            </h3>
            <h4 className="my-5 text-base sm:text-lg md:text-xl lg:text-xl">
              Authors: {article.authorString}
            </h4>
            <h4 className="my-5 text-base sm:text-lg md:text-xl lg:text-xl">
              Publication Year: {article.dateOfCreation}
            </h4>
          </div>
          <div
            className={`rounded-lg ml-2 h-10 text-center flex items-center justify-center px-2 ${
              Math.random() ? 'bg-gray-700' : 'bg-gray-900'
            }`}
          >
            <Icon
              onClick={(e) => e.preventDefault()}
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white hover:text-gray-300 cursor-pointer`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
