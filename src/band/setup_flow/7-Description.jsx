import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';


export default class StepFlow7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      description: '',
    };
  }

    handleChange = (event) => {
      this.setState({
        description: event.target.value,
      });
    };

    handleSubmit = () => {
      const { description } = this.state;
      const { handleSubmitDescription } = this.props;
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
        handleSubmitDescription(description);
      }, 400);
    };

    render() {
      const { loading } = this.state;
      return (
        <div id="band-setup-step-2">
          <Form
            loading={loading}
            onSubmit={this.handleSubmit}
          >
            <Form.Field>
              <Header as="h1">Describe your band</Header>
              <input
                name="band-description"
                type="text-area"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Button>Finish</Button>
            </Form.Field>
          </Form>
        </div>
      );
    }
}

StepFlow7.propTypes = {
  handleSubmitDescription: PropTypes.func.isRequired,
};
