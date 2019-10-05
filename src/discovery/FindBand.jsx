import React from 'react';

export default class FindBand extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: 'goodbye' };
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return <div>{this.state.hello}</div>;
  }
}
