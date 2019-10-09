import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import BandCard from './BandCard';
import { BAND } from '../util/props';

export default function BandGrid({ loading, bands }) {
  if (loading) {
    return <Grid.Column />;
  }
  return (
    <>
      {bands.map((band) => (
        <Grid.Column>
          <BandCard
            band={band}
          />
        </Grid.Column>
      ))}
    </>
  );
}

BandGrid.propTypes = {
  loading: PropTypes.bool.isRequired,
  bands: PropTypes.arrayOf(PropTypes.shape(BAND)),
};

BandGrid.defaultProps = {
  bands: PropTypes.arrayOf(),
};
