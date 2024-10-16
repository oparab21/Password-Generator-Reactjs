
import { useState } from 'react';
import './App.css';
import { lowerCaseLetters, numbers, specialCharacters, upperCaseLetters } from './Data';

function App() {
  let [uppercase, setUpperCase] = useState(false);
  let [lowercase, setLowerCase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordLen, setPasswordLen] = useState(10);
  let [fPass, setFPass] = useState();

  let createPassword = () => {
    let charSet = '';
    let finalPass = '';
    if(uppercase || lowercase || number || symbols){
        if(uppercase) charSet+=upperCaseLetters;
        if(lowercase) charSet+=lowerCaseLetters;
        if(number) charSet+=numbers;
        if(symbols) charSet+=specialCharacters;
        for(let i=0; i<passwordLen; i++){
          finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
        }
        setFPass(finalPass);
    }
    else{
      alert('Please select one checkbox')
    }
  }

  let copyPass = () => {
      navigator.clipboard.writeText(fPass);
  }
  

  return (
    <div className="App">
      <div className='box'>
        <h3>Password Generator</h3>
        <div className='boxIn'>
          <input type='text' readOnly value={fPass}></input> <button onClick={copyPass}>Copy</button>
        </div>
        <div className='passLength'>
          <label>Password Length</label>
          <input type='number' max={20} min={10} value={passwordLen} onChange={(event) => {setPasswordLen(event.target.value)}}></input>
        </div>

        <div className='passLength'>
          <label>Include uppercase letter</label>
          <input type='checkbox' checked={uppercase} onChange={() => {setUpperCase(!uppercase)}}></input>
        </div>
        <div className='passLength'>
          <label>Include lowercase letter</label>
          <input type='checkbox' checked={lowercase} onChange={() => {setLowerCase(!lowercase)}}></input>
        </div>
        <div className='passLength'>
          <label>Include numbers</label>
          <input type='checkbox' checked={number} onChange={() => {setNumber(!number)}}></input>
        </div>
        <div className='passLength'>
          <label>Include symbols</label>
          <input type='checkbox' checked={symbols} onChange={() => {setSymbols(!symbols)}}></input>
        </div>

        <button class='btn' onClick={createPassword}>Generate Password</button>
      </div>
      
    </div>
  );
}

export default App;
