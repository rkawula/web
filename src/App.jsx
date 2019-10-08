import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AppNavbar from './global/AppNavbar';
import FindBand from './discovery/FindBand';
import Discovery from './discovery/Discovery';
import Home from './user/Home';
import NewBandPageTakeover from './global/NewBandPageTakeover';
import StepContainer from './band/setup_flow/StepContainer';
import 'semantic-ui-css/semantic.min.css';

const leftItems = [
  { as: Link, content: 'Home', to: '/' },
  { as: Link, content: 'Band setup', to: '/setup/' },
  { as: Link, content: 'Discovery', to: '/discovery/' },
];

const rightItems = [
  { as: 'a', content: 'Login', key: 'login' },
  { as: 'a', content: 'Register', key: 'register' },
];

/**
 * Main application component for the UI.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedBand: {},
      openModal: false,
    };
  }

  completedSetup = (band) => {
    this.setState({
      completedBand: band,
      openModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      completedBand: {},
      openModal: false,
    });
  };

  /**
   * Renders main page content.
   *
   * @returns {*}
   */
  render() {
    const { completedBand, openModal } = this.state;
    return (
      <Router>
        <AppNavbar
          leftItems={leftItems}
          rightItems={rightItems}
        />
        <div id="router content">
          <Route path="/" exact component={Home} />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Route path="/setup/" render={(props) => <StepContainer {...props} completedSetup={this.completedSetup} />} />
          <Route path="/discovery/" exact component={Discovery} />
          <Route path="/discovery/band/" component={FindBand} />
        </div>
        <NewBandPageTakeover
          band={completedBand}
          closeModal={this.closeModal}
          openModal={openModal}
        />
      </Router>
    );
  }
}

export default App;
