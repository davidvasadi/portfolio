import { useState, useEffect } from 'react';

type InitialValue = boolean | (() => boolean);

const useDarkMode = (initialValue: InitialValue = false) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    typeof initialValue === 'function' ? (initialValue as () => boolean)() : initialValue
  );

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return { darkMode, setDarkMode, toggleDarkMode };
};

export default useDarkMode;
