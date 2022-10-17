import './App.css';
import Header from './Header';
import Main1 from './Main1';
import Foot1 from './Foot1';
import Propbut from './prop_but';
import  {useState}  from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import {Link,Route,Routes} from 'react-router-dom'
function App() {
  const [getter,setter]=useState('posty')
  const handleBl=()=>{
        console.log(getter)
        setter('gopinath')
  }
  const lp=[{name:'lolo'},{name:'solo'}]
  return (
    <div className="App">
      <header className="header">
              <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <ul>Home</ul>
            <ul to="#features">Features</ul>
            <ul to="#pricing">Pricing</ul>
          </Nav>
        </Container>
      </Navbar>

        <Header/>
      </header>
      <main className='main'>
        <Main1/>
      </main>
      <footer style={{color:'blue'}}>
        <Foot1/>
      </footer>
      <button onClick={handleBl}>
        pullup
      </button>
      <Propbut name={lp[0].name}></Propbut>
    </div>

)
}



export default App;
