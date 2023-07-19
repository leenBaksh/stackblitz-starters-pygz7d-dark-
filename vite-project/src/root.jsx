import { useContext } from 'react';
import App, { ThemeContext } from './App';

export default function Root() {
  const darkMode = useContext(ThemeContext);
  return (
    <>
      <div className={darkMode ? 'dark' : 'light'}>
        <App />
      </div>
    </>
  );
}
