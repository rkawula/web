import React from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Grid, Image } from 'semantic-ui-react';

export default class Discovery extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      targetDiscovery: '',
    };
  }

  handleTargetDiscovery = (path) => {
    this.setState({
      targetDiscovery: path,
    });
  };

  render() {
    const { targetDiscovery } = this.state;
    if (targetDiscovery) {
      return <Redirect to={targetDiscovery} />;
    }
    return (
      <div id="discovery">
        <Grid columns="three">
          <Grid.Row>
            <Grid.Column>
              <Card
                onClick={() => this.handleTargetDiscovery('/discovery/band')}
              >
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Find a Band for yourself</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => this.handleTargetDiscovery('/discovery/bandmate')}
              >
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Find a Bandmate for your band</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => this.handleTargetDiscovery('/discovery/merge')}
              >
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Merge Bands</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
