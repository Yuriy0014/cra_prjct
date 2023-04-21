import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Lorem ipsum dolor sit amet.</p>
          <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolore est labore mollitia obcaecati officia!</p>
          </div>
          <div>
          <p>Test no lorem</p>
          </div>
          <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolore est labore mollitia obcaecati officia!</p>
          </div>
          <div>
              <p>develop/login First commit</p>
          </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
