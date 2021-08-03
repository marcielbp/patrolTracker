import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Webpages from './pages';
import MapContainer from "google-maps-react";

function App() {
  return (
    <div className="App">
      <h1>Patrol Tracker</h1>
      <div>
      <a href="checkin">CheckIn</a>
        <Webpages />
      </div>
    </div>
  );
}

//export default App;
export default withAuthenticator(App)
