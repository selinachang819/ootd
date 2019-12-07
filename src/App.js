import React from 'react';
import './App.css';
import generate from '@babel/generator';
import domtoimage from 'dom-to-image';
import date from 'date-and-time';
import { Upload, Icon, Modal } from 'antd';



let topchoices=[
  {url:"https://bit.ly/2pSTXUT"},
  {url:"https://bit.ly/2KXZFMw"},
  {url:"https://bit.ly/2KVNyzN"}
];
let bottomchoices=[
  {url:"https://bit.ly/2Dmsn5v"},
  {url:"https://bit.ly/33iOLr6"},
  {url:"https://bit.ly/2R0Af4Z"}
];
let shoeschoices=[
  {url:"https://bit.ly/2XNtUv4"},
  {url:"https://bit.ly/2KTF5wQ"},
  {url:"https://bit.ly/2DmdnEK"}
]
let bagchoices=[
  {url:"https://bit.ly/37w1rhz"},
  {url:"https://bit.ly/33n2I7m"},
  {url:"https://bit.ly/2OJJ1kW"}
]

const now = new Date();

let style1={
  visibility:'hidden'
}
let style2={
  visibility:'visible'
}

function App(){
  return (
    <div className="App">
      <div id="anchor"></div>
      
      <p id="title">What should be my outfit of {date.format(now, 'MMM DD')} ?</p>
      <button id="generate" onClick={generator} >Generate!!</button> 
      <div id="outfit">
      <img id="bottom" src={bottomchoices[0].url}/>
      <img id="top" src={topchoices[0].url}/>
      <img id="bag" src={bagchoices[0].url}/>
      <img id="shoes" src={shoeschoices[0].url}/> 
      </div>
      <div className="wardrobe">
        <ul id="list" style={style1}>
          <a href="#tc"><li>Top</li></a>
          <a href="#bc"><li>Bottom</li></a>
          <a href="#sc"><li>Shoes</li></a>
          <a href="#bgc"><li>Bag</li></a>
        </ul> 
      <div className="button">
      <button id="wardrobe" onMouseOver={list} onMouseOut={list2}>Wardrobe</button>
      <a href="#anchor"><button id="return">Going back UP!</button></a>
      </div>
      </div>
      <div id="choices">
        <div id="tc">
        <p>Top Choices</p>
        <br></br>
        {topchoices.map(topselection)}
        <form onChange={handleChange}>
        <input type="text" multiple="false" placeholder="Your Cloth URL" ></input>
        <input type="submit" value="Submit"></input>
        </form>
        </div>
        <div id="bc">
        <p>Bottom Choices</p>
        <br></br>
        {bottomchoices.map(bottomselection)}
        <form onChange={handleChange2}>
        <input type="text" multiple="false" placeholder="Your Cloth URL" ></input>
        <input type="submit" value="Submit"></input>
        </form>
        </div>
        <div id="sc">
        <p>Shoes Choices</p>
        <br></br>
        {shoeschoices.map(shoesselection)}
        <form onChange={handleChange3}>
        <input type="text" multiple="false" placeholder="Your Cloth URL" ></input>
        <input type="submit" value="Submit"></input>
        </form>
        </div>
        <div id="bgc">
        <p>Bag Choices</p>
        <br></br>
        {bagchoices.map(bagselection)}
        <form onChange={handleChange4}>
        <input type="text" multiple="false" placeholder="Your Cloth URL" ></input>
        <input type="submit" value="Submit"></input>
        </form>
        </div>
       
       </div>
     
    </div>
    
    );}
  
//random generate

let length0 = topchoices.length;
let length1 = topchoices.length;
let length2 = topchoices.length;
let length3 = topchoices.length;

function generator(){
  document.getElementById('top').src=topchoices[Math.floor(Math.random()* length0 )].url;
  document.getElementById('bottom').src=bottomchoices[Math.floor(Math.random()*length1 )].url;
  document.getElementById('bag').src=bagchoices[Math.floor(Math.random()* length2)].url;
  document.getElementById('shoes').src=shoeschoices[Math.floor(Math.random()* length3)].url;
}

//showing list

function list(){
  document.getElementById('list').style={style2};
}
function list2(){
  document.getElementById('list').style={style1};
};
//uploading images


function handleChange(event){
  let add = {url: event.target.value};
  topchoices.push(add);
  console.log(add);
  console.log(topchoices);
  console.log(length0);
}
function handleChange2(event){
  bottomchoices.push(event.target.value);
}
function handleChange3(event){
  shoeschoices.push(event.target.value);
}
function handleChange4(event){
  bagchoices.url.push(event.target.value);
}
//display images


function topselection(data){
  return (
    <div>
    <TOP src={data.url}/>
    </div>
  );
}


function bottomselection(data){
  return (
    <div>
    <BOTTOM src={data.url}/>
    </div>
  );
}
function shoesselection(data){
  return (
    <div>
    <SHOES src={data.url}/>
    </div>
  );
}
function bagselection(data){
  return (
    <div>
    <BAG src={data.url}/>
    </div>
  );
}
function TOP(props){ 
  return(
    <img className="display" src={props.src}/>
  );

 
}

function BOTTOM(props){
  return(
    <img className="display" src={props.src}/>
  )
}
function SHOES(props){
  return(
    <img className="display" src={props.src}/>
  )
}
function BAG(props){
  return(
    <img className="display" src={props.src}/>
  )
}
export default App;

