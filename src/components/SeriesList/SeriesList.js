import React from 'react';
import './SeriesList.css';

const SeriesListItem = ({ series }) => (
  <li>
  { series.show.name}
  </li>
)

const SeriesList = (props) => {
  return(
    <div>
      <ul className={'series__list'}>
        {props.list.map(series => (
          <SeriesListItem key={series.show.id} series={series} />
        ))}
      </ul>
    </div>
  )
}

export default SeriesList;