import logo from './logo.svg';
import React, { useEffect } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Webpages from './pages';
import MapContainer from "google-maps-react";
import { Auth } from 'aws-amplify'

function App() {
  return (
    <div className="App">
    <div id=""
      <h1>Patrol Tracker</h1>
      <div>
      <a href="./profile">Profile</a>
      <a href="./checkin">CheckIn</a>
      <a href="./report">Report</a>
        <Webpages />
      </div>
    </div>
  );
}

//export default App;
export default withAuthenticator(App)
