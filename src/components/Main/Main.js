import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../container/Series/Series';
import SingleSeries from '../../container/SingleSeries/SingleSeries';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route exact path="/series/:id" component={SingleSeries} />
  </Switch>
);

export default Main;
