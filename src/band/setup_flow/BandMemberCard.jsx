import { Card, Image, Button } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';


export default function BandMemberCard({
  role, name, description, skill,
}) {
  return (
    <Card>
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{role}</Card.Header>
        {name === 'You' ? <Card.Meta>{name}</Card.Meta> : (
          <Button basic color="green">
          Invite Friend for Role
          </Button>
        )}
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {skill}
      </Card.Content>
    </Card>
  );
}

BandMemberCard.propTypes = {
  role: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};
