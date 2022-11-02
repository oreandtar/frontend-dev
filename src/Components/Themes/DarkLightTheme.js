import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themeStyles';
import '../../App.css'

function DarkLightTheme({ children }) {
  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div id={theme}>
        {children}
        <button onClick={() => themeToggler()} className="btn"> Switch Mode</button>
      </div>
    </ThemeProvider>

  );
}

export default DarkLightTheme;
