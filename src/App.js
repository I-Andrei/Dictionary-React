import './App.css';
import React, { useState } from 'react';
import InsertWord from './components/Insert_component';
import SearchWord from './components/Search_component';

function App() {
  
  const [words, setWords] = useState(["New Word: "])
  
  function exportWords () {
    return words
  }
  
  function InsertNewWord (wordFromInsertComp) {
    let arrayOfWords_copy = words
    arrayOfWords_copy.push(wordFromInsertComp)
    setWords(arrayOfWords_copy)
  }

  return (
    <div className="App">
      <div ><InsertWord insertWord={exportWords()} addWord={InsertNewWord} /></div>
      <div ><SearchWord searchWord={exportWords()} /></div>
      </div>
  );
}

export default App;