import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import AppContextProvider from './contexts/AppContextProvider';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <Router>
      <AppContextProvider>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </AppContextProvider>
    </Router>
  );
}

export default App;
