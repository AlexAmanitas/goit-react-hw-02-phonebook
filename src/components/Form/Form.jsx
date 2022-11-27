import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: '',
    };
  }

  handleonChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
    console.log(value);
  };

  render() {
    return (
      <form action="">
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleonChange}
          />
        </label>
      </form>
    );
  }
}
