import React from 'react';
import SeriesList from '../../components/SeriesList/SeriesList';
import Loader from '../../components/Loader/Loader';


class Series extends React.Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }
 
  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then((response) => response.json())
    .then(json => this.setState({ series: json, isFetching: false }));
  }

  render() {
    const { series, seriesName, isFetching} = this.state;
    return (
      <div>
        <div>
          <input value={seriesName} 
                type="text" 
                onChange={this.onSeriesInputChange} />
        </div>
        { 
          !isFetching && series.length === 0 && seriesName.trim() === '' && 
          <p>Please enter Series name</p>}
        {
          !isFetching &&  series.length === 0 && seriesName.trim() !== '' &&
          <p>No Tv series exists!!</p>
        }
        {
          isFetching && <Loader />
        }
        {
          !isFetching && <SeriesList list={this.state.series} />
        }
      </div>
    )
  }
}

export default Series;