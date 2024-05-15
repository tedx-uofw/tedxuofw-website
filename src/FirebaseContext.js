// // FirebaseContext.js
import React, { createContext, useContext } from 'react';
import { db, storage } from './firebase';

const FirebaseContext = createContext();

export const useFirebase = () => {
return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  return (
      <FirebaseContext.Provider value={{ db, storage }}>
          {children}
      </FirebaseContext.Provider>
  );
};
