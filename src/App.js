import React from 'react';
import './App.css';
import generate from '@babel/generator';
import domtoimage from 'dom-to-image';

let topchoices=[
  "https://bit.ly/2pSTXUT","https://bit.ly/2KXZFMw","https://bit.ly/2KVNyzN"
];
let bottomchoices=[
  "https://bit.ly/2Dmsn5v","https://bit.ly/33iOLr6","https://bit.ly/2R0Af4Z"
];
let shoeschoices=[
  "https://bit.ly/2XNtUv4","https://bit.ly/2KTF5wQ","https://bit.ly/2DmdnEK"
]
let bagchoices=[
  "https://bit.ly/37w1rhz","https://bit.ly/33n2I7m","https://bit.ly/2OJJ1kW"
]





function App() {
  return (
    <div className="App">
      <p>What should be my OOTD?</p>
      <button id="generate" onClick={generator} >Generate!!</button> 
      <div id="outfit">
      <img id="bottom" src={bottomchoices[0]}/>
      <img id="top" src={topchoices[0]}/>
      <img id="bag" src={bagchoices[0]}/>
      <img id="shoes" src={shoeschoices[0]}/> 
      </div>
      <div className="wardrobe">
      <ul>
        <a>Top</a>
        <a>Bottom</a>
        <a>Shoes</a>
        <a>Bag</a>
      </ul>
      <button id="wardrobe" >Wardrobe</button>
      </div>
      <button id="picture" onClick={capture}>Take a picture!</button>
      
    </div>
     );
}

function generator(){
  document.getElementById('top').src=topchoices[Math.floor(Math.random()* 3)]
  document.getElementById('bottom').src=bottomchoices[Math.floor(Math.random()* 3)]
  document.getElementById('bag').src=bagchoices[Math.floor(Math.random()* 3)]
  document.getElementById('shoes').src=shoeschoices[Math.floor(Math.random()* 3)]
}


function capture(){

domtoimage.toJpeg(document.getElementsByClassName('wardrobe'), { quality: 0.95 })
(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });}
// function edit(){
//   return(
//  <input type="file" multiple="false" accept="image/*" id="wardrobe" ></input>
//   )
// }
export default App;

