import { useEffect, useState, JSX } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeContext } from '@/context/theme/ThemeContext';
import { theme } from '@/assets/styles/theme';
import { ThemeMode } from '@/types';

interface ThemeProviderProps {
  children: JSX.Element;
}

const getInitialTheme = (): ThemeMode => {
  const stored = localStorage.getItem('theme');

  if (stored === 'light' || stored === 'dark') {
    return stored; //проверяет, что в localStorage реально лежит 'light' или 'dark', а не мусор
  } else {
    return 'dark'; // fallback, если в localStorage мусор или ничего нет
  }
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(getInitialTheme);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);

    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>{' '}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
