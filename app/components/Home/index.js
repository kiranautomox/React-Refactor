import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <h1>This is the Home page.</h1> 
                 <p>Want to go battle page? Click Below </p>
                 <Link to="/battle">Battle</Link>
            </div>
        )
    }
}