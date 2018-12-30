import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from '../Nav';
import Home from '../Home';
import Battle from '../Battle';
import Popular from '../Popular';
import Results from '../Results'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="wrapper container">
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/battle" component={Battle}></Route>
                        <Route path="/popular" component={Popular}></Route>
                        <Route path='/battle/results' component={Results}></Route>
                        <Route render={() => <p>Page Not Found</p>} />
                    </Switch>
                </div>
            </Router>
            )
    }
}
  
