import React from 'react';

/**
 * Required by AppNavbar.test.js to allow initialEntries to work correctly.
 *
 * Found at https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303
 * @type {{HashRouter?, BrowserRouter?, Link?, NavLink?, StaticRouter?, useLocation?, generatePath?, useRouteMatch?, Prompt?, matchPath?, Switch?, useHistory?, withRouter?, useParams?, __RouterContext?, Route?, Router?, MemoryRouter?, Redirect?}}
 */
const rrd = require('react-router-dom');
// Just render plain div with its children
rrd.BrowserRouter = ({children}) => <div>{children}</div>
module.exports = rrd;