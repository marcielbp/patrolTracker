//file: src/pages/ronda.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*
function submitAWS(data){
    alert('Um nome foi enviado' + {data});
    fetch('https://er8lepjcv6.execute-api.us-east-1.amazonaws.com/default/funcao-exemplo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
}

const Ronda = () => {
    return (
        <div>
            <h2>Patrol</h2>
            <h1>Insert new patrol</h1>
        <form onSubmit={submitAWS}><label>
        PatrolID:<input type="text" name="patrolID" /> 
        Latitude:<input type="text" name="lat" /> 
        Longitude: <input type="text" name="lon" /> 
        Delta (min): <input type="text" name="delta" /> 
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
    );
};
*/



class Ronda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        patrolID: 3,
        lat: -3.755,
        lon: -38.581,
        delta: 5,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
handleSubmit(event) {
    fetch('https://er8lepjcv6.execute-api.us-east-1.amazonaws.com/default/funcao-exemplo', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'X-API-Key':'NbyJsU8LVY5mZufzacojW8usYw3sQl9o8ttBBqge',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    alert('Um nome foi enviado: ' + JSON.stringify(this.state));
    event.preventDefault();
  }
  /*
  submitAWS(data){
    alert('Um nome foi enviado' + {data});
    fetch('https://er8lepjcv6.execute-api.us-east-1.amazonaws.com/default/funcao-exemplo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
}
*/

  render() {
    return (
        <div>
            <h2>Patrol</h2>
            <h1>Insert new patrol</h1>
        <form onSubmit={this.handleSubmit}><label>
        PatrolID:<input type="number" value={this.state.patrolID} onChange={this.handleInputChange} name="patrolID"/> 
        Latitude:<input type="number" value={this.state.lat} onChange={this.handleInputChange} name="lat"/> 
        Longitude: <input type="number" value={this.state.lon} onChange={this.handleInputChange} name="lon"/> 
        Delta (min): <input type="number" value={this.state.delta} onChange={this.handleInputChange} name="delta"/> 
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
    );
  }
}

ReactDOM.render(
  <Ronda/>,
  document.getElementById('root')
);

export default Ronda;

