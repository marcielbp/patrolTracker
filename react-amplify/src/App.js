import logo from './logo.svg';
import React, { useEffect } from 'react'
import './App.css';
import { withAuthenticator, AmplifyGreetings, AmplifySignOut  } from '@aws-amplify/ui-react'
import Webpages from './pages';
import MapContainer from "google-maps-react";
import { Auth } from 'aws-amplify'

const userProfileData = {
    username: 'undefined'
};

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

Auth.currentAuthenticatedUser().then(user => {userProfileData.username = user.username }).catch(err => console.log(err));

function App() {
  return (
    <div className="App">
    <div id="profile-header"><h1>Patrol Tracker</h1></div>
     <AmplifyGreetings username={userProfileData.username}></AmplifyGreetings>
      <div>
      <a href="../profile">Profile</a>
      <a href="../checkin">CheckIn</a>
      <a href="../report">Report</a>
     
        <Webpages />
      </div>
    </div>
  );
}

//export default App;
export default withAuthenticator(App)
