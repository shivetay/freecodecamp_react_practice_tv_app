import React from 'react';
import giphy from './giphy.gif';
import './Loader.css';


const Loader = props => (
  <div>
    <img className={"loader"}
      alt="loading icon" 
      src={giphy} />
  </div>
)

export default Loader;