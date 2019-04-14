import React, { Component } from 'react';
import './App.css';
import AppNavbar from "./global/AppNavbar";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Discover from "./band/Discover";
import Setup from "./band/Setup";
import { Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'


/**
 * Navbar components to anchor left.
 *
 * @type {*[]}
 */
const leftItems = [
  { as: Link, content: "Home", to: "/" },
  { as: Link, content: "Band setup", to: "/setup/" },
  { as: Link, content: "Discover bands", to: "/discover/"}
];

/**
 * Navbar components to anchor right. Placeholders.
 *
 * @type {*[]}
 */
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" }
];


/**
 * Main application component for the UI.
 */
class App extends Component {


  /**
   * Renders main page content.
   *
   * @returns {*}
   */
  render() {
    return (
        <div>
          <Router>
            <AppNavbar
              leftItems={leftItems}
              rightItems={rightItems}
            >
              <Image src="https://react.semantic-ui.com/logo.png" />
            </AppNavbar>
            <Route path="/" exact component={Discover}/>
            <Route path="/setup/" component={Setup}/>
            <Route path="/discover/" component={Discover}/>
          </Router>
      </div>);
  }
}

export default App;
