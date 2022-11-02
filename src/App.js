import './App.css';
import UserInfor from './components/UserInfor';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [theme, setTheme] = useState(false);
  const themeSelector = () => {
    setTheme(!theme)
  }
  useEffect(() => {
    if (theme === true) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme])
  return (
    <div className="App" id={theme}>
      <UserInfor />
      <div className='button'>
        <button className='bt' onClick={themeSelector}>{theme ? "Switch to light mode" : "Switch to dark mode"}</button>
      </div>
    </div>
  );
}

export default App;
