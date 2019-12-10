import React, { useState } from 'react';
import './App.css';
import generate from '@babel/generator';
import date from 'date-and-time';
import { statement } from '@babel/template';


let topchoices = [
  { url: "https://bit.ly/2pSTXUT" },
  // { url: "https://bit.ly/2KXZFMw" },
  // { url: "https://bit.ly/2KVNyzN" }
];
let bottomchoices = [
  { url: "https://bit.ly/2Dmsn5v" },
  // { url: "https://bit.ly/33iOLr6" },
  // { url: "https://bit.ly/2R0Af4Z" }
];
let shoeschoices = [
  { url: "https://bit.ly/2XNtUv4" },
  // { url: "https://bit.ly/2KTF5wQ" },
  // { url: "https://bit.ly/2DmdnEK" }
]
let bagchoices = [
  { url: "https://bit.ly/37w1rhz" },
  // { url: "https://bit.ly/33n2I7m" },
  // { url: "https://bit.ly/2OJJ1kW" }
]

const now = new Date();

let style1 = {
  visibility: 'hidden'
}
let style2 = {
  visibility: 'visible'
}

function App() {
  return (
    <div className="App">
      <div id="anchor"></div>

      <p id="title">What should be my outfit of {date.format(now, 'MMM DD')} ?</p>
      <button id="generate" onClick={generator} >Generate!!</button>
      <div id="outfit" style={style1}>
        <img id="bottom" src={bottomchoices[0].url} />
        <img id="top" src={topchoices[0].url} />
        <img id="bag" src={bagchoices[0].url} />
        <img id="shoes" src={shoeschoices[0].url} />
      </div>
      <div className="wardrobe">
        <ul id="list" style={style1}>
          <a href="#Top"><li>Top</li></a>
          <a href="#Bottom"><li>Bottom</li></a>
          <a href="#Shoes"><li>Shoes</li></a>
          <a href="#Bag"><li>Bag</li></a>
        </ul>
        <button id="wardrobe" onMouseOver={list} onMouseOut={list2}>Wardrobe</button>
      </div>
      <div id="choices">
        <Choices title="Top" choices={topchoices} />
        <Choices title="Bottom" choices={bottomchoices} />
        <Choices title="Shoes" choices={shoeschoices} />
        <Choices title="Bag" choices={bagchoices} />
      </div>
      <a href="#anchor"><button id="return">Going back UP!</button></a>
    </div>

  );
}



//random generate



function generator() {
let length0 = topchoices.length;
let length1 = bottomchoices.length;
let length2 = bagchoices.length;
let length3 = shoeschoices.length;
  document.getElementById('outfit').style = { style2 };
  document.getElementById('top').src = topchoices[Math.floor(Math.random() * length0)].url;
  document.getElementById('bottom').src = bottomchoices[Math.floor(Math.random() * length1)].url;
  document.getElementById('bag').src = bagchoices[Math.floor(Math.random() * length2)].url;
  document.getElementById('shoes').src = shoeschoices[Math.floor(Math.random() * length3)].url;
}

//showing list

function list() {
  document.getElementById('list').style = { style2 };
}
function list2() {
  document.getElementById('list').style = { style1 };
};

//display images

function Choices(props) {
  
  let [choices, setChoices]= useState(props.choices);
  let [texts, setTexts] =useState()
  function handleChange() {
    let newChoices= [...choices , {url: texts}]
    console.info('form', texts);
    let add = { url: texts };
    props.choices.push(add);
    setChoices(newChoices);
   };
function textChange(params) {
  setTexts(params.target.value)
}
  return (
    <div id={props.title}>
      <p>{props.title} Choices</p>
      {choices.map(selection)}
      <form onSubmit={handleChange}>
        <input onChange={textChange} type="text" multiple="false" placeholder="Look it up on the website!" ></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>);
}

function selection(data) {
  return (
    <div>
      <CHOICES src={data.url} />
    </div>
  );
}


function CHOICES(props) {
  return (
    <img className="display" src={props.src} />
  );


}


export default App;

