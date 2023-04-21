import { createContext } from 'react';
import AppContext from '../types/AppContext';

export default createContext<AppContext>({
  searchedValue: '',
  setSearchedValue(search) {
    return search;
  },
});
