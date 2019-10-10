import PropTypes from 'prop-types';

const BAND = {
  bandName: PropTypes.string,
  userRoles: PropTypes.instanceOf(Set),
  bandRoles: PropTypes.arrayOf(PropTypes.string),
  genres: PropTypes.arrayOf(PropTypes.string),
  inspirations: PropTypes.arrayOf(PropTypes.string),
};

export {
  // eslint-disable-next-line import/prefer-default-export
  BAND,
};
