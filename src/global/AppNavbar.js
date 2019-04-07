import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import React, {Component} from "react";
import Setup from "../band/Setup";
import Discover from "../band/Discover";


class AppNavbar extends Component {


    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/setup/">Band setup</Link>
                        </li>
                        <li>
                            <Link to="/discover/">Discover bands</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Route path="/" exact component={Discover}/>
                    <Route path="/setup/" component={Setup}/>
                    <Route path="/discover/" component={Discover}/>
                </div>
            </Router>);
    }
}

export default AppNavbar;
