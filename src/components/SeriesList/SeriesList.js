import React from 'react';
import './SeriesList.css';


const SeriesList = (props) => {
  return(
    <div>
      <ul className={'series__list'}>
        {props.list.map(series => (
          <li key={series.show.id}>{series.show.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default SeriesList;