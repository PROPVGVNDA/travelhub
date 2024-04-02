import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addToCart = (ticket) => {
    setCart((currentCart) => [...currentCart, ticket]);
  };

  const addUser = user => {
    setUsers(currentUsers => [...currentUsers, user]);
  };

  const loginUser = (user) => {
    setCurrentUser(user);
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <MainContext.Provider value={{ cart, addToCart, users, addUser, currentUser, loginUser, logoutUser }}>
      {children}
    </MainContext.Provider>
  );
};
