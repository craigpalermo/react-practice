import React from 'react';
import moment from 'moment-timezone';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: this.getCurrentTime(),
    };

    this.updateTime = this.updateTime.bind(this);
  }

  componentDidMount() {
    const clockId = setInterval(this.updateTime, 1000);
    this.setState({
      clockId,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.clockId);
  }

  getCurrentTime() {
    return this.props.tz ? moment.tz(this.props.tz) : moment.tz();
  }

  updateTime() {
    this.setState({
      now: this.getCurrentTime(),
    });
  }

  render() {
    return (
      <div>
        <strong>{this.state.now.format('zz')}</strong> {this.state.now.format()}
      </div>
    );
  }
}