import React, { createContext, useState } from 'react';
import useLocalStorage from '../libs/useLocalStorage';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { storage, updateStorage } = useLocalStorage('mode', 'dark')

  const [ globalData, setGlobalData ] = useState({mode: storage});

  const updateGlobalData = (newData) => {
    setGlobalData({...globalData, ...newData});
    updateStorage(newData.mode)
  };

  return (
    <GlobalContext.Provider value={{ globalData, updateGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};