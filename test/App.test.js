import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router';
import 'jest-enzyme';
import { Link } from 'react-router-dom';
import AppNavbar from '../src/global/AppNavbar';
import App from '../src/App';
import Home from '../src/user/Home';
import NewBandPageTakeover from '../src/global/NewBandPageTakeover';

describe('App', () => {
  it('renders the navbar', () => {
    const leftItems = [
      { as: Link, content: 'Home', to: '/' },
      { as: Link, content: 'Band setup', to: '/setup/' },
      { as: Link, content: 'Discovery', to: '/discovery/' },
    ];

    const rightItems = [
      { as: 'a', content: 'Login', key: 'login' },
      { as: 'a', content: 'Register', key: 'register' },
    ];

    const wrapper = shallow(<App />);
    expect(wrapper).toContainReact(
      <AppNavbar
        leftItems={leftItems}
        rightItems={rightItems}
      />,
    );
  });

  it('contains the routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Route)).toHaveLength(4);
  });

  it('contains the NewBandPageTakeover', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NewBandPageTakeover)).toHaveLength(1);
  });
});
