import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import images from './images'

const string = 'fasdfdkjflkadsj fkldsajf kl;dsajfkl ;adsjfkl; ad'

const imagesLinks = images


const App = () => {
  return <React.Fragment>
    <h1>instaFlat</h1>
    {imagesLinks.map(imageLink=><img src={imageLink} />)}
  </React.Fragment>
}

export default App;
