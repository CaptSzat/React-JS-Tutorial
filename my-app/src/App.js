import Nav from './components/Nav'
import Header from './components/Header';
import Main from './components/Main'
import Logo from './components/Logo'
import Button from "./components/Button";
import "./index.css"
import ModeToggler from './components/ModeToggler';
import Promo from './components/Promo';
import Child from './components/Child';
import { useState } from 'react';


export function App(props) {
  const date = new Date();
  const[showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Nav first="Home" second="Articles" third="About" fourth="Contact"/>
      <Header name="Anna" color="purple"/>
      <Promo/>
      <Main/>
      <Child message={date.toLocaleTimeString()} output={showMenu} run={setShowMenu(false)}/>
      <Logo test="pic"/>
      <ModeToggler />
      <Button />
      <h1>{props.title}</h1>
    </>
  );
}

export default App;
