//file: src/pages/index.js

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './profile';
import Ronda from './ronda';
import CheckIn from './checkin';
const Webpages = () => {
    return(
        <Router>
            <Route exact path="/profile" component= {Profile} />
            <Route path = "/ronda" component = {Ronda} />
            <Route path = "/checkin" component = {CheckIn} />
        </Router>
    );
};
export default Webpages;