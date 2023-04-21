import { useState } from 'react';
import AppContext from './AppContext';
import React from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

function AppContextProvider({ children }: ProviderProps) {
  const [searchedValue, setSearchedValue] = useState('');

  return (
    <AppContext.Provider value={{ searchedValue, setSearchedValue }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
