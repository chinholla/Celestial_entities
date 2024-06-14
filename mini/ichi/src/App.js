import './App.css';
import Lottie from "lottie-react";
import animationData from "./assets/Animation - 1704720202952.json"
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Moon from './pages/Moon';
import Gal from './pages/Gal';
import Obs from './pages/Obs';
import Planet from './pages/Planet';
import Star from './pages/Star';






function App() {
  let Component;
  switch (window.location.pathname){
    case "/home":
      Component = Home
      break
    case "/gal":
      Component = Gal
      break
    case "/moon":
      Component = Moon
      break
    case "/planet":
      Component = Planet
      break
    case "/obs":
      Component = Obs
      break
    case "/star":
      Component = Star
      break
    default:
      Component = Login
      break
  }
  return (
    <div className="App">
      <Component/>
      <a  href="/login"></a>
    </div>
  );
}

export default App;
