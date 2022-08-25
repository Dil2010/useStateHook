import React from 'react';
import {useState} from 'react';

function Textmake() {
const [inputValue,setInputValue]=useState("Dilan");

let changesToInput=(event)=>{
 const newvalue=event.target.value;
 setInputValue(newvalue)
}
  return (
    <div>
      <input placeholder='write something' onChange={changesToInput}/>
      <h1>this is carazy</h1>
      {inputValue}
    </div>
  )
}

export default Textmake
