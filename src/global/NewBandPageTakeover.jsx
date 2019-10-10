import React from 'react';
import {
  Modal, Image, Header, Button, Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { BAND } from '../util/props';

export default function NewBandPageTakeover({ closeModal, openModal, band: newBand }) {
  return (
    <Modal
      centered
      closeIcon
      closeOnDimmerClick
      onClose={closeModal}
      size="large"
      open={openModal}
    >
      <Modal.Header>Band created!</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src="https://react.semantic-ui.com/images/avatar/large/rachel.png" />
        <Modal.Description>
          <Header as="h2">Recap</Header>
          <p>
            <Header as="h3">Band Name</Header>
            {newBand.bandName}
          </p>
          <p>
            <Header as="h3">Your Roles</Header>
            {newBand && newBand.userRoles && [...newBand.userRoles].join(', ')}
          </p>
          <p>
            <Header as="h3">Other band members</Header>
            {newBand && newBand.bandRoles && [...newBand.bandRoles].join(', ')}
          </p>
          <p>
            <Header as="h3">Genres</Header>
            {newBand && newBand.genres && [...newBand.genres].join(', ')}
          </p>
          <p>
            <Header as="h3">Inspirations</Header>
            {newBand && newBand.inspirations && [...newBand.inspirations].join(', ')}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={closeModal} inverted>
          <Icon name="checkmark" />
            Jammin&#39;!
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

NewBandPageTakeover.propTypes = {
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  band: PropTypes.shape(BAND).isRequired,
};
