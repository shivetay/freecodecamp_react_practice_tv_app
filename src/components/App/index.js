import React from 'react';
import Main from '../Main/Main';
import './App.css';
import 'whatwg-fetch';



class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV series List</h1>
        </header>
        <Main />
      </div>
  );
 }
}

export default App;
