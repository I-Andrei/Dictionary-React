import React, { useState } from 'react';

let alert = ""

function SearchWord(props) {

    const [search, setSearch] = useState("");
    
    function typedWord(event) {
        setSearch(event.target.value)
    }

    function buttonSearchClicked() {
        if(props.searchWord.indexOf(search) === -1){
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

  export default SearchWord;