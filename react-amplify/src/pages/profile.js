//file: src/pages/profile.js
import React from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import ReactDOM from 'react-dom';

const userProfileData = {
    username: 'undefined'
};

//let user = await Auth.currentAuthenticatedUser();
//console.log(user)

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        Auth.currentAuthenticatedUser().then(user => {userProfileData.username = user.username }).catch(err => console.log(err));
    }
    componentDidUpdate() {
        Auth.currentAuthenticatedUser().then(user => {userProfileData.username = user.username }).catch(err => console.log(err));
    }
    
    
    render() {
        
        return (
            <div>
                <h2>Profile</h2>
                <h3> Hello, {userProfileData.username} </h3>
                <p>This is Profile page</p>
            </div>
        );
    };
};

ReactDOM.render(<Profile/>, document.getElementById('root'));
export default withAuthenticator(Profile);

