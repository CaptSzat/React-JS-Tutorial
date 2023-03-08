import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading.js'
import Nav from './components/Nav'

function Header() { 
  return <h1>Hello World! </h1>
 }

export function App(props) {
  return (
    <>
      <Nav/>
      <Header/>
      <h1>{props.title}</h1>
    </>
  );
}

export default App;
