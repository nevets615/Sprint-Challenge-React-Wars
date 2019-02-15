import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './StarWarsChars';

function App() {
    return (
      <div className="App">
        < StarWarsChars/>
        
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));
