import './App.css';
import React, { useState } from 'react';

let words = ["New Word: "], alert = ""

function App() {
  function InsertWord() {
    const [insert, setInsert] = useState("");

    function typedWord(event) {
      setInsert(event.target.value)
    }
    
    function buttonInsertClicked() {
      if(words.indexOf(insert) === -1){
        words.push(insert)
        words.push(", ")
        alert = words
        setInsert("")
      } else {
        alert = "The word already exists!"
        setInsert("")
      }
    }

    return (
      <div>
        <label>Write Word:</label>
        <input type="text" id="textBox" onChange={typedWord} placeholder="Lower case, all one word"></input>
        <button type="button" onClick={() => buttonInsertClicked()}> Insert Word </button>
        <div>{alert}</div>
      </div>
    )
  }

  function SearchWord() {
    const [search, setSearch] = useState("");
    
    function typedWord(event) {
      setSearch(event.target.value)
    }

    function buttonSearchClicked() {
      if(words.indexOf(search) === -1){
        alert = "The word does not exists in the dictionary!"
        setSearch("")
      } else {
        alert = "The word already exists!"
        setSearch("")
      }
    }

    return (
      <div>
        <label>Search Word:</label>
        <input type="text" onChange={typedWord} placeholder="Lower case, all one word"></input>
        <button type="button" onClick={() => buttonSearchClicked()}> Search Word </button>
        <div>{alert}</div>
      </div>
        
    )
  }

  return (
    <div className="App">
      <div ><InsertWord /></div>
      <div ><SearchWord /></div>
      </div>
  );
}

export default App;


