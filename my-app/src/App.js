import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading.js'

function Header() { 
  return <h1>Hello World! </h1>
 }

export function App(props) {
  return (
    <>
      <Header/>
      <h1>{props.title}</h1>
    </>
  );
}

export default App;
