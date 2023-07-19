import { createContext, useState } from 'react';
import Component1 from './component1';


export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <ThemeContext.Provider value={darkMode}>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        Toggle Dark Button
      </button>
      <h1 className={darkMode ? 'dark' : 'light'}> Hello world</h1>

      <Component1 darkMode={darkMode} />
      </ThemeContext.Provider>
    </>
  );
}
export default App;
