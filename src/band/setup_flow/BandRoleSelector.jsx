import { Dropdown } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';


export default function BandRoleSelector({ option, roles, onChange }) {
  return (
    <Dropdown
      placeholder="Select Role"
      selection
      options={roles}
      onChange={onChange}
      value={option}
      fluid
    />
  );
}

BandRoleSelector.propTypes = {
  option: PropTypes.string,
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.string,
      image: PropTypes.object,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

BandRoleSelector.defaultProps = {
  option: 'undefined',
};
