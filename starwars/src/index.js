import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function App() {
    return (
      <div className="starwars">
        < starwarsChars/>
        
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));
