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
    let words_copy = words
    words_copy.push(wordFromInsertComp)
    setWords(words_copy)
  }

  return (
    <div className="App">
      <div ><InsertWord insertWord={exportWords()} importFromInsertComp={InsertNewWord} /></div>
      <div ><SearchWord searchWord={exportWords()} /></div>
      </div>
  );
}

export default App;