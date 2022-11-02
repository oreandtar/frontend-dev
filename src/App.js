import React from 'react';
import { UserContextProvider } from './Components/SocialFeed/DB';
import SocialFeed from './Components/SocialFeed/SocialFeed';
import DarkLightTheme from './Components/Themes/DarkLightTheme';
import './App.css'

function App() {
  return (
    <UserContextProvider>
      <DarkLightTheme>
        <SocialFeed />
      </DarkLightTheme>
    </UserContextProvider>
  );
}
export default App;
