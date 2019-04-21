import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'


/**
 * Band create page.
 */
class Setup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Sends band creation request to the API. Will either redirect on success or display an error.
     */
    handleSubmit() {
        // TODO: send submit request
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 500);
    }

    /**
     * Handles changes to the text input field.
     * @returns {*}
     */
    handleChange(event) {
        this.setState({
            band_name: event.target.value
        });
    }

    render() {
        return (
            <div id="band-setup">
                <Form
                    loading={this.state.loading}
                    onSubmit={this.handleSubmit}
                >
                    <Form.Field>
                        <label>Enter band name</label>
                        <input
                            name="band-name"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>);
    }
}

export default Setup;
