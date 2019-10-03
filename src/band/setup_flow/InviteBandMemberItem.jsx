import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';


export default function InviteBandMemberItem({ role, skill }) {
  return (
    <Item>
      <Item.Image size="tiny" src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg" />
      <Item.Content>
        <Item.Header>{role}</Item.Header>
        <Item.Meta>{skill}</Item.Meta>
        <Item.Description as="a">Invite Friend for Role</Item.Description>
      </Item.Content>
    </Item>
  );
}

InviteBandMemberItem.propTypes = {
  role: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};
