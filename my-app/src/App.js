import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading.js'
import Nav from './components/Nav'
import Header from './components/Header';


export function App(props) {
  return (
    <>
      <Nav />
      <Header name="Anna" color="purple"/>
      <h1>{props.title}</h1>
    </>
  );
}

export default App;
