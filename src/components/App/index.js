import React from 'react';
import './App.css';
import Intro from '../Intro/Intro';
import Series from '../../container/Series/Series';
import 'whatwg-fetch';



class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV series List</h1>
        </header>
        <Intro message={"Find your tv series"}/>
        <Series />
      </div>
  );
 }
}

export default App;
