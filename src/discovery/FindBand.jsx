import React from 'react';
import {
  Grid, Dimmer, Loader,
} from 'semantic-ui-react';
import BandGrid from './BandGrid';

const FAKE_BANDS = [
  {
    id: 1,
    bandName: 'The Wombats',
    bandRoles: ['Vocalist', 'Drums', 'Guitar', 'Bass'],
    emptyRoles: ['Keys', 'Wildcard'],
    genres: ['indie rock', 'electro pop', 'british rock', 'britrock'],
    inspirations: ['The Strokes'],
  },
  {
    id: 2,
    bandName: 'Keane',
    bandRoles: ['Vocalist', 'Drums', 'Keys', 'Bass'],
    emptyRoles: ['Guitar'],
    genres: ['piano rock', 'soft rock', 'alt rock', 'alternative'],
    inspirations: ['The Beatles', 'The Strokes'],
  },
  {
    id: 3,
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
      currentBand: '',
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

  onBandClick = (bandName) => {
    // TODO: Replace with band ID rather than string match on name.
    const { currentBand } = this.state;
    let selectedBand = bandName;
    if (currentBand === selectedBand) {
      selectedBand = '';
    }
    this.setState({
      currentBand: selectedBand,
    });
  };

  render() {
    const { loading, currentBand } = this.state;

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
          currentBand={currentBand}
          onBandClick={this.onBandClick}
        />
      </Grid>
    );
  }
}
