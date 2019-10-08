import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from '../../src/App';
import 'jest-enzyme';
import Home from '../../src/user/Home';
import Discovery from '../../src/discovery/Discovery';
import StepContainer from '../../src/band/setup_flow/StepContainer';

describe('AppNavbar', () => {
  it('routes /', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('routes /discover/', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/discovery']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(Discovery)).toHaveLength(1);
  });

  it('routes /setup/', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/setup']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(StepContainer)).toHaveLength(1);
  });
});
