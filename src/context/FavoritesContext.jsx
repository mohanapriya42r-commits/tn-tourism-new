import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const { user, showToast } = useAuth();
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('tn_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tn_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (placeId, event) => {
    if (event) event.stopPropagation();

    if (!user) {
      showToast('Please login to add places to your favorites!', 'danger');
      return false;
    }

    setFavorites((prevFavs) => {
      const exists = prevFavs.includes(placeId);
      if (exists) {
        showToast('Removed from Favorites', 'info');
        return prevFavs.filter((id) => id !== placeId);
      } else {
        showToast('Added to Favorites ❤️', 'success');
        return [...prevFavs, placeId];
      }
    });

    return true;
  };

  const isFavorite = (placeId) => favorites.includes(placeId);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
