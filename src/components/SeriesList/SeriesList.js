import React from 'react';
import { Link } from 'react-router-dom';
import './SeriesList.css';

const SeriesListItem = ({ series }) => (
  <li>
    <Link to={`/series/${series.show.id}`}>
    { series.show.name}
    </Link>
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