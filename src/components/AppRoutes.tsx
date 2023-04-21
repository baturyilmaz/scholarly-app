import { Route, Routes } from 'react-router-dom';
import SearchResults from '../pages/SearchResult';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/search/:query" element={<SearchResults />} />
    </Routes>
  );
}

export default AppRoutes;
