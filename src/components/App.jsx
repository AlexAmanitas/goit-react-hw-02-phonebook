import React, { Component } from 'react';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/Contacts';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      name: '',
      number: '',
      filter: '',
    };
  }

  formSubmitHandler = data => {
    this.setState({ contacts: [...this.state.contacts, data] });
  };

  handleChangeFilter = data => {
    console.log(data.search);
    this.setState({ filter: data.search });
    this.state.contacts.filter(el => {
      console.log(el.name, el.name.includes(data.search));
      return el.name.includes(data.search);
    });
    console.log(this.state.contacts);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleChangeFilter} />
        <ContactList data={this.state.contacts} />
      </div>
    );
  }
}
