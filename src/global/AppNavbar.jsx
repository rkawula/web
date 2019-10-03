import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/**
 * Navbar component for the application. Semi-responsive (will stack when in mobile mode,
 * but does not currently collapse).
 */
function AppNavbar(props) {
  const { children, leftItems, rightItems } = props;

  return (
    <div>
      <Menu inverted stackable>
        <Menu.Item>
          <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        {/* eslint-disable-next-line react/no-array-index-key,react/jsx-props-no-spreading */}
        {leftItems.map((item, idx) => <Menu.Item {...item} key={`left-menu-item-${idx}`} />)}
        <Menu.Menu position="right">
          {/* eslint-disable-next-line react/no-array-index-key,react/jsx-props-no-spreading */}
          {rightItems.map((item, idx) => <Menu.Item {...item} key={`right-menu-item-${idx}`} />)}
        </Menu.Menu>
      </Menu>
      <Container>{children}</Container>
    </div>
  );
}

const itemShape = {
  as: PropTypes.any,
  content: PropTypes.string,
  key: PropTypes.string,
};

AppNavbar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  leftItems: PropTypes.arrayOf(
    PropTypes.shape(itemShape),
  ).isRequired,
  rightItems: PropTypes.arrayOf(
    PropTypes.shape(itemShape),
  ).isRequired,
};

AppNavbar.defaultProps = {
  children: [],
};

export default AppNavbar;
