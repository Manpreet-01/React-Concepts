import React, {useState, useEffect} from 'react'

 // import local image and store its reference in a variable
import myImageVar from './myImage.jpg'

// import image as a module as is exported default
const myImage = require("./myImage.jpg").default
 
// online img use
const myImageLink = "https://i.pinimg.com/736x/50/69/61/5069613b363dc9f5c0bc4c9824ab26b7--background-hd-wallpaper-wallpaper-pc.jpg";


const App = () => {
  
  return (
  <>      
    <img src={myImage} width="200px" height="200px" />
    <img src={myImageVar} width="200px" height="200px" />
    <img src={myImageLink} width="200px" height="200px" />
  </>
)};

export default App;
