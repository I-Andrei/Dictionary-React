import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const newWord = ''
const inputWord = (
  <div>
    <label>Write Word:</label>
    <input type="text" id="newWord" value={newWord.value} required minlength="4" maxlength="30" size="30" placeholder="Lower case, all one word"></input>
    <button type="button" onClick={inputNewWord}> Insert Word </button>
  </div>
);
const x = []

function inputNewWord() {
  const i = x.indexOf(document.getElementById("newWord").value)
	if(i >= 0)
    return root.render("The word is already in the dictionary") 
  else if (i < 0) {
    x.push(document.getElementById("newWord").value)
    return root.render("The word was inserted")
  }
  return root.render(x)
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  inputWord, 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
