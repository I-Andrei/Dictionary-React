import React, { useState } from 'react';

let alert = ""

function InsertWord(props) {
    const [insert, setInsert] = useState("New Words: ")

    function typedWord(event) {
      setInsert(event.target.value)
    }

    function ButtonClicked() {
      if(props.insertWord.indexOf(insert) === -1){
        alert = "You inserted the word in the dictionary!"
        props.importFromInsertComp(insert)
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
        <button type="button" onClick={()=> ButtonClicked()}> Insert Word </button>
        <div>{alert}</div>
      </div>
    )
  }

  export default InsertWord;