// import logo from './logo.svg';
// import './App.css';
// import Heading from './components/Heading.js'
import Nav from './components/Nav'
import Header from './components/Header';
import "./index.css"


export function App(props) {
  return (
    <>
      <Nav first="Home" second="Articles" third="About" fourth="Contact"/>
      <Header name="Anna" color="purple"/>
      <h1>{props.title}</h1>
    </>
  );
}

export default App;
