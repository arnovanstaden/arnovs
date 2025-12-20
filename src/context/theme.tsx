'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Get system preference or default to dark
const getSystemTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  return 'dark';
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  // Initialize with system preference, or stored preference if available
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as Theme;
      if (storedTheme) {
        return storedTheme;
      }
      return getSystemTheme();
    }
    return 'dark';
  });

  // Apply theme on mount and when it changes
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Listen for system preference changes (only if user hasn't manually set a preference)
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return; // User has manually set a preference, don't follow system changes

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'light' : 'dark');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => setTheme((prevTheme) => {
    const newTheme = prevTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    return newTheme;
  });

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
