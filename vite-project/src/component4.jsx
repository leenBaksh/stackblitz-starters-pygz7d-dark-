import { useContext } from 'react';
import { ThemeContext } from './App.jsx';
export default function Component4() {
  const darkMode = useContext(ThemeContext);
  return (
    <>
      <div className="boundary">
        <h1 className={darkMode ? 'dark' : 'light'}>Video Player</h1>
      </div>
    </>
  );
}
