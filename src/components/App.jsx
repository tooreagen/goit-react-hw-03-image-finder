import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  contactAdd = evt => {
    const { name, number } = evt.target;
    evt.preventDefault();
    if (this.state.contacts.some(item => item.name === name.value)) {
      alert(`${name.value} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: name.value,
            number: number.value,
          },
        ],
      }));
    }
  };

  contactDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id),
    });
  };

  contactFind = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactsForm handleSubmit={this.contactAdd} />

        <h2>Contacts</h2>
        <Filter handleFind={this.contactFind} />
        <ContactsList
          contacts={this.state.contacts}
          filterString={this.state.filter}
          onDelete={this.contactDelete}
        />

        <GlobalStyle />
      </Layout>
    );
  }
}
