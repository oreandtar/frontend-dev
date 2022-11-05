import './App.css';
import { useState,useEffect} from 'react';
import data from './DB.json'
import Feed from './componets/Feed';
import Post from './componets/Post'
import { Container } from 'postcss';
function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="App pt-14 bg-gray-100 dark:bg-black">
      
      <Feed />
       <button className="fixed bg-white border border-gray-300 dark:border-none bottom-8 py-2 px-3 right-14 dark:bg-neutral-900 dark:text-white  p-1 rounded-3xl text-sm font-bold " onClick={handleThemeSwitch}>
        {
          theme ==='dark'? 'Switch To Lightmode':'Switch To Darkmode'
        }
      </button>
    </div>
  );
}

export default App;
