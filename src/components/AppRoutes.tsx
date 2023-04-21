import { Route, Routes } from 'react-router-dom';
import SearchResults from '../pages/SearchResult';
import ArticlePage from '../pages/ArticlePage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/search/:query" element={<SearchResults />} />
      <Route path="/article/:id" element={<ArticlePage />} />
    </Routes>
  );
}

export default AppRoutes;
