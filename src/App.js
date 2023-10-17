import React from "react";
import './App.css';

import { Message } from "./components/Message/Message";
import { FocusableInput } from "./components/FocusableInput/FocusableInput";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus/PlayerStatus";
import { TeamsList } from "./components/TeamList/TeamsList";

const imageLinks = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Component tests */}
        <h2>Testing 'Message' Component</h2>
        <Message />
        <hr className="separator" />
        
        <h2>Testing 'FocusableInput' Component</h2>
        <FocusableInput />
        <hr className="separator" />
        
        <h2>Testing 'ImageGallery' Component</h2>
        <ImageGallery links={imageLinks} />
        <hr className="separator" />
        
        <h2>Testing 'PlayerStatus' Component</h2>
        <PlayerStatus />
        <hr className="separator" />
        
        <h2>Testing 'TeamsList' Component</h2>
        <TeamsList />
        <hr className="separator" />
      </header>
    </div>
  );
}

export default App;
