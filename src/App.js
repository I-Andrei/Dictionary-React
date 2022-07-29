import './App.css';
import React from 'react';
import InsertWord from './components/Insert_component';
import SearchWord from './components/Search_component';

let words = ["New Word: ", "Andrei", "Victor"]

function App() {
  
  function InsertNewWord() {
    console.log("words: " + words)
    return words
  }

  return (
    <div className="App">
      <div></div>
      <div ><InsertWord insertWord={InsertNewWord()} /></div>
      <div ><SearchWord searchWord={InsertNewWord()} /></div>
      </div>
  );
}

export default App;