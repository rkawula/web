import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';


describe("App", () => {
    it('renders the navbar', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the routes', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});
