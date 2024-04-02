import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([]);

  const addToCart = (ticket) => {
    setCart((currentCart) => [...currentCart, ticket]);
  };

  const addUser = user => {
    setUsers(currentUsers => [...currentUsers, user]);
  };

  return (
    <MainContext.Provider value={{ cart, addToCart, users, addUser }}>
      {children}
    </MainContext.Provider>
  );
};
