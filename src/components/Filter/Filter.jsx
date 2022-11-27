import React, { Component } from 'react';

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleChange = evt => {
    this.setState({ search: evt.currentTarget.value });
    this.props.onChange(this.state);
  };

  render() {
    return (
      <>
        <label htmlFor="">
          Find contacts by name
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </label>
      </>
    );
  }
}
