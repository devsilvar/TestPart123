import { useContext, useEffect } from 'react';
import { ThemeContext } from './ContextProvider';
const Concepts = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    // If the theme is "light", set the page's background color to white and the text color to black
    if (theme == 'light') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }

    // If the theme is "dark", set the page's background color to black and the text color to white
    if (theme == 'dark') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  }, [theme]);

  return (
    <div>
      <h2 className={theme == 'dark' ? `fs-5 text-dark` : ` fs-5 text-dark`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate eum
        porro architecto veniam
      </h2>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Concepts;
