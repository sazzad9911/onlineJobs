import logo from './files/Screenshot_2021-09-22_172154-removebg-preview.png';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Footer from './components/Footer';
import Body from './components/Body'

function App() {
  return (
    <div className="App" style={{backgroundColor: '#FFFFFF'}}>
      <header className="App-header">
        <Navbar/>
      </header>
      <div className='body'>
      <Body/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
