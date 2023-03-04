import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactsForm.styled';
import PropTypes from 'prop-types';


export class ContactsForm extends Component {
  nameInputId = nanoid();
  phoneInputId = nanoid();

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Label htmlFor={this.nameInputId}>Name</Label>
        <Input
          id={this.nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={this.phoneInputId}>Number</Label>
        <Input
          id={this.phoneInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};