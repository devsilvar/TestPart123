import { createContext, useState } from 'react';
import { ChildrenProp, ThemeContextType } from '../../utils/types';

// The Context API in React is a basically allows you to manage and share state across multiple components. With ths you do not need too pass props down manually at every level which could lead to props drilling

// It provides a way to create global variables that can be passed around your application, making it easier to manage state in larger and more complex applications.

// A Common useCase is a Theme Application, meaning Dark state and Light State

// THEN THE CONTEXT PROVIDER WILL BE WRPPER AROUND THE MAIN.JSX

// once that is done any Componenet passed through the App.Tsx will be able to access the values being passed fron the ContextApi

// I wiil be using the Concepts.tsx in this folder

// Create a Context
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  changeTheme: () => {},
});

const ContextProvider: React.FC<ChildrenProp> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  const changeTheme = () => {
    setTheme((prev) => (prev == 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ContextProvider };
