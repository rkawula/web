import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import SkillLevelSelector from '../SkillLevelSelector';


export default class StepFlow6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      genres: [],
      inspirations: [],
      skillLevel: '',
    };
  }

    handleSubmit = () => {
      const { handleSubmitStyle } = this.props;
      const { skillLevel, genres, inspirations } = this.state;
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
        handleSubmitStyle(skillLevel, genres, inspirations);
      }, 400);
    };

    handleGenres = (event) => {
      this.setState({
        genres: event.target.value
          .split(',')
          .map((item) => item.trim()).filter((item) => item),
      });
    };

    handleInspirations = (event) => {
      this.setState({
        inspirations: event.target.value
          .split(',')
          .map((item) => item.trim()).filter((item) => item),
      });
    };

    handleSkillLevel = (clickedSkillLevel) => {
      const { skillLevel } = this.state;
      if (skillLevel === clickedSkillLevel) {
        this.setState({
          skillLevel: '',
        });
      } else {
        this.setState({
          skillLevel: clickedSkillLevel,
        });
      }
    };

    render() {
      const { loading, skillLevel } = this.state;

      return (
        <div id="band-setup-step-6">
          <Form
            loading={loading}
            onSubmit={this.handleSubmit}
          >
            <Header as="h1">Style and Goals</Header>
            <Form.Field>
              <Header as="h3">Enter your genres</Header>
              <input
                name="band-genres"
                onChange={this.handleGenres}
              />
            </Form.Field>
            <Form.Field>
              <Header as="h3">Enter your inspiration bands</Header>
              <input
                name="band-inspirations"
                onChange={this.handleInspirations}
              />
            </Form.Field>
            <Form.Field>
              <SkillLevelSelector
                handleSkillLevel={this.handleSkillLevel}
                activeSkillLevel={skillLevel}
              />
            </Form.Field>
            <Form.Button>Save</Form.Button>
          </Form>
        </div>
      );
    }
}

StepFlow6.propTypes = {
  handleSubmitStyle: PropTypes.func.isRequired,
};
