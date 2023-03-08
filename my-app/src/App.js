import Nav from './components/Nav'
import Header from './components/Header';
import Main from './components/Main'
import Logo from './components/Logo'
import Button from "./components/Button";
import "./index.css"
import ModeToggler from './components/ModeToggler';
import Promo from './components/Promo';
import UseStateExample from './components/UseStateExample'
import Child from './components/Child';


export function App(props) {
  const date = new Date();
  return (
    <>
      <Nav first="Home" second="Articles" third="About" fourth="Contact"/>
      <Header name="Anna" color="purple"/>
      <Promo/>
      <Main/>
      <Child message={date.toLocaleTimeString()}/>
      < UseStateExample />
      <Logo test="pic"/>
      <ModeToggler />
      <Button />
      <h1>{props.title}</h1>
    </>
  );
}

export default App;
