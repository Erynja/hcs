import logo from './logo.svg';
import './App.css';
import React from 'react';
import './index.css';
import EmailForm from './components/EmailForm';

function App() {
  return (
    <div className="App">
      <h1>
        Shoot me a message 
      </h1>
      <EmailForm/>
    </div>
  );
}

export default App;

