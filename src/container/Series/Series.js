import React from 'react';
import SeriesList from '../../components/SeriesList/SeriesList';


class Series extends React.Component {
  state = {
    series: [],
  }
 
  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    .then((response) => response.json())
    .then(json => this.setState({ series: json}));
  }

  render() {
    return (
      <div>
        <SeriesList list={this.state.series} />
      </div>
    )
  }
}

export default Series;