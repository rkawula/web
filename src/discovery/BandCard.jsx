import React from 'react';
import {
  Card, Image, Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { BAND } from '../util/props';


export default function BandCard({ band }) {
  return (
    <Card>
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{band.bandName}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          {band.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
}

BandCard.propTypes = {
  band: PropTypes.shape(BAND).isRequired,
};
