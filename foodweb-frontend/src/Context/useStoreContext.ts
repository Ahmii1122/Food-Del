// src/Context/useStoreContext.ts
import { useContext } from 'react';
import { StoreContext, StoreContextType } from './StoreContext';

export const useStoreContext = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStoreContext must be used within a StoreContextProvider');
  }
  return context;
};
