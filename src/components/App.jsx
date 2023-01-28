import React, { Component } from 'react';
import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    let check = false;
    if (this.state.contacts !== '') {
      check = this.state.contacts.find(
        el => el.name.toLowerCase() === data.name.toLowerCase()
      );
    }
    return check
      ? alert(`${data.name} is already exist.`)
      : this.setState({ contacts: [...this.state.contacts, data] });
  };

  handleChangeFilter = data => {
    this.setState({ filter: data });
  };

  handleClickDelete = data => {
    console.log(data);
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== data),
    });
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleChangeFilter} filter={this.state.filter} />
        <Contacts
          onDelete={this.handleClickDelete}
          data={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
