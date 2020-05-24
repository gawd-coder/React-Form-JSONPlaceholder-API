import React from 'react';
import Posts from "./components/Posts"
import Postform from "./components/Postform"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
