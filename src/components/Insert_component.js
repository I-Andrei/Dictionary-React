import React, { useState } from 'react';

let alert = ""

function InsertWord(props) {
    const [input_word, setInput_word] = useState("")

    function typedWord(event) {
      setInput_word(event.target.value)
    }

    function ButtonClicked() {
      if(props.insertWord.indexOf(input_word) === -1){
        alert = "You inserted the word in the dictionary!"
        props.addWord(input_word)
      } else
        alert = "The word already exists!"
      setInput_word("")
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