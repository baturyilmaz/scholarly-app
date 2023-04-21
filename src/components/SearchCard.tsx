import { FiBookmark } from 'react-icons/fi';
import ArticleCard from './ArticleCard';
import { Result } from '../types/SearchResponse';

interface SearchCardProps {
  article: Result;
}

function SearchCard({ article }: SearchCardProps) {
  return <ArticleCard icon={FiBookmark} article={article} />;
}

export default SearchCard;
