import './App.css';
import Header from './Header';
import Main1 from './Main1';
import Foot1 from './Foot1';
function App() {
  return (
    <div className="App">
      <header className="header">
        <Header/>
      </header>
      <main className='main'>
        <Main1/>
      </main>
      <footer style={{color:'blue'}}>
        <Foot1/>
      </footer>
    </div>
  );
}

export default App;
