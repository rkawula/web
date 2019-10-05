import React, { Component } from 'react';
import {
  Form, Card, Header, Image, Grid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const FAKE_ROLES = new Set(['Bass', 'Keys']);

export default class StepFlow2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRoles: new Set(),
      loading: false,
    };
  }

    /**
     * Sends band creation request to the API. Will either redirect on success or display an error.
     */
    handleSubmit = () => {
      // TODO: send submit request
      const { handleSubmitUserRoles } = this.props;
      const { userRoles } = this.state;
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
        handleSubmitUserRoles(userRoles);
      }, 400);
    };

    /**
     * Handles changes to the tiles field.
     * @returns {*}
     */
    handleChange = (role) => {
      const { userRoles } = this.state;
      const prevRoles = userRoles;
      if (prevRoles.has(role)) {
        prevRoles.delete(role);
      } else {
        prevRoles.add(role);
      }
      this.setState({
        userRoles: prevRoles,
      });
    };

    render() {
      const { loading, userRoles } = this.state;
      return (
        <div id="band-setup-step-2">
          <Form
            loading={loading}
            onSubmit={this.handleSubmit}
          >
            <Form.Field>
              <Header as="h1">Select your roles</Header>
              <Grid columns="three">
                <Header as="h1">Your roles</Header>
                <Grid.Row>
                  {[...FAKE_ROLES].map((role, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                    <Grid.Column key={`select-your-role-${role}-${i}`}>
                      <Card
                        onClick={() => this.handleChange(role)}
                        raised={userRoles.has(role)}
                      >
                        <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                        <Card.Content>
                          <Card.Header>{role}</Card.Header>
                          <Card.Meta>Beginner</Card.Meta>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
            </Form.Field>
            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      );
    }
}

StepFlow2.propTypes = {
  handleSubmitUserRoles: PropTypes.func.isRequired,
};
