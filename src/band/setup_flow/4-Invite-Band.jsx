import React from 'react';
import {
  Header, Form, Item, Grid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import BandMemberCard from './BandMemberCard';
import InviteBandMemberItem from './InviteBandMemberItem';

export default class StepFlow4 extends React.Component {
  constructor(props) {
    super(props);
    const { userRoles, bandRoles } = this.props;
    this.state = {
      loading: false,
      userRoles,
      bandRoles,
    };
  }

    handleSubmit = () => {
      const { handleSubmitBandMembers } = this.props;
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
        handleSubmitBandMembers();
      }, 400);
    };

    render() {
      const { loading, userRoles, bandRoles } = this.state;
      return (
        <div id="band-setup-step-4">
          <Form
            loading={loading}
            onSubmit={this.handleSubmit}
          >
            <Grid columns="three" divided>
              <Header as="h1">Your roles</Header>
              <Grid.Row>
                {userRoles && [...userRoles].map((role) => (
                  <Grid.Column
                    key={`your-role-${role}`}
                  >
                    <BandMemberCard
                      role={role}
                      name="You"
                      skill="Beginner"
                      description="Lorem ipsum"
                    />
                  </Grid.Column>
                ))}
              </Grid.Row>
              <Header as="h1">Invite bandmates</Header>
              <Grid.Row>
                {/* TODO: add unique ID to member/roles */}

                {bandRoles && bandRoles.map((role) => (
                  <Grid.Column
                    key={`member-${role}`}
                  >
                    <Item.Group link>
                      <InviteBandMemberItem
                        role={role}
                        skill="Beginner"
                      />
                    </Item.Group>
                  </Grid.Column>
                ))}
              </Grid.Row>
              <Form.Button>Save</Form.Button>
            </Grid>
          </Form>
        </div>
      );
    }
}

StepFlow4.propTypes = {
  handleSubmitBandMembers: PropTypes.func.isRequired,
  userRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  bandRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
