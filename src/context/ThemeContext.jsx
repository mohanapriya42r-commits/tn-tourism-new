import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
  { id: 'dark', name: 'Dark Mode', icon: '🌙', dotClass: 'dot-dark' },
  { id: 'light', name: 'Light Mode', icon: '☀️', dotClass: 'dot-light' },
  { id: 'heritage', name: 'Royal Heritage', icon: '🏛️', dotClass: 'dot-heritage' },
  { id: 'ocean', name: 'Ocean Teal', icon: '🌊', dotClass: 'dot-ocean' }
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('tn_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tn_theme', theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
