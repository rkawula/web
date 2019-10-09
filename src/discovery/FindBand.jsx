import React from 'react';
import {
  Grid, Dimmer, Loader,
} from 'semantic-ui-react';
import BandGrid from './BandGrid';

const FAKE_BANDS = [
  {
    bandName: 'The Wombats',
    bandRoles: ['Vocalist', 'Drums', 'Guitar', 'Bass'],
    emptyRoles: ['Keys', 'Wildcard'],
    genres: ['indie rock', 'electro pop', 'british rock', 'britrock'],
    inspirations: ['The Strokes'],
  },
  {
    bandName: 'Keane',
    bandRoles: ['Vocalist', 'Drums', 'Keys', 'Bass'],
    emptyRoles: ['Guitar'],
    genres: ['piano rock', 'soft rock', 'alt rock', 'alternative'],
    inspirations: ['The Beatles', 'The Strokes'],
  },
  {
    bandName: 'Long Birds',
    bandRoles: ['Vocalist', 'Drums', 'Keys', 'Bass'],
    emptyRoles: ['Bass', 'Guitar', 'Guitar'],
    genres: ['blues', 'alt rock', 'rnb', 'alternative'],
    inspirations: ['Kimbra', 'The Strokes'],
  },
];

export default class FindBand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }

  render() {
    const { loading } = this.state;

    return (
      <Grid columns={2} relaxed="very" stackable>
        <Dimmer
          active={loading}
        >
          <Loader
            size="massive"
          >
            Finding Bands...
          </Loader>
        </Dimmer>
        <BandGrid
          loading={loading}
          bands={FAKE_BANDS}
        />
      </Grid>
    );
  }
}
