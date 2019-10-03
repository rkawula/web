import React, { Component } from 'react';
import {
  Form, Grid, Header, Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import BandRoleSelector from './BandRoleSelector';


const ROLES = [
  {
    key: 'Guitar',
    text: 'Guitar',
    value: 'Guitar',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Drums',
    text: 'Drums',
    value: 'Drums',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Bass',
    text: 'Bass',
    value: 'Bass',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Vocalist',
    text: 'Vocalist',
    value: 'Vocalist',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Keys',
    text: 'Keys',
    value: 'Keys',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Wildcard',
    text: 'Wildcard',
    value: 'Wildcard',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
];

export default class StepFlow3 extends Component {
  constructor(props) {
    super(props);
    const { userRoles } = this.props;
    this.state = {
      userRoles,
      loading: false,
      selectedBandRoles: [],
      numberOfExtraRoles: 0,
    };
  }

    /**
     * Sends band creation request to the API. Will either redirect on success or display an error.
     */
    handleSubmit = () => {
      // TODO: send submit request
      const { handleSubmitBandRoles } = this.props;
      const { selectedBandRoles } = this.state;
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
        handleSubmitBandRoles(selectedBandRoles);
      }, 400);
    };

    handleAddRole = () => {
      const { numberOfExtraRoles } = this.state;
      this.setState({
        numberOfExtraRoles: numberOfExtraRoles + 1,
      });
    };

    handleSelectRole = (event, data, i) => {
      const { selectedBandRoles } = this.state;
      const newBandRoles = selectedBandRoles;
      newBandRoles[i] = data.value;
      this.setState({
        selectedBandRoles: newBandRoles,
      });
    };

    handleDeleteRole = (event, data, position) => {
      const { selectedBandRoles, numberOfExtraRoles } = this.state;
      const newBandRoles = selectedBandRoles;
      newBandRoles.splice(position, 1);
      this.setState({
        numberOfExtraRoles: numberOfExtraRoles - 1,
        selectedBandRoles: newBandRoles,
      });
    };

    render() {
      const {
        loading, userRoles, numberOfExtraRoles, selectedBandRoles,
      } = this.state;
      return (
        <div id="band-setup-step-3">
          <Form
            loading={loading}
            onSubmit={this.handleSubmit}
          >
            <Grid columns="two" divided>
              <Header as="h1">Your roles</Header>
              <Grid.Row>
                {[...userRoles].map((role) => (
                  <Grid.Column key={`my-roles-${role}`}>
                    <BandRoleSelector
                      option={role}
                      roles={ROLES}
                      disabled
                    />
                  </Grid.Column>
                ))}
              </Grid.Row>
              <Header as="h1">Add bandmate roles</Header>
              <Grid.Row>
                {numberOfExtraRoles ? [...Array(numberOfExtraRoles)].map((_, position) => (
                  <Grid.Column key={`unassigned-roles-${new Date()}`}>
                    <BandRoleSelector
                      option={selectedBandRoles[position]}
                      roles={ROLES}
                      onChange={(event, data) => this.handleSelectRole(event, data, position)}
                    />
                    <Icon
                      name="delete"
                      size="big"
                      onClick={
                                (event, data) => this.handleDeleteRole(event, data, position)
}
                    >
Remove
                    </Icon>
                    <br />
                  </Grid.Column>
                )) : null}
              </Grid.Row>
            </Grid>
            <Icon name="add circle" size="big" onClick={this.handleAddRole}>Add</Icon>
            <Form.Button>Save</Form.Button>
          </Form>
        </div>
      );
    }
}

StepFlow3.propTypes = {
  handleSubmitBandRoles: PropTypes.func.isRequired,
  userRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
