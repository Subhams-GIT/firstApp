import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    if (!favorites.some(item => item.key === product.key)) {
      setFavorites(prevFavorites => [...prevFavorites, product]);
    }
  };

  const removeFavorite = (product) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.key !== product.key));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}
