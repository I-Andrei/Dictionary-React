import './App.css';
import React from 'react';
import InsertWord from './components/Insert_component';
import SearchWord from './components/Search_component';

let words = ["New Word: "]

function App(props) {

  function exportWords () {
    return words
  }
  
  function InsertNewWord (wordFromInsertComp) {
    words.push(wordFromInsertComp)
    console.log("words: " + words)
  }

  return (
    <div className="App">
      <div ><InsertWord insertWord={exportWords()} importFromInsertComp={InsertNewWord} /></div>
      <div ><SearchWord searchWord={exportWords()} /></div>
      </div>
  );
}

export default App;