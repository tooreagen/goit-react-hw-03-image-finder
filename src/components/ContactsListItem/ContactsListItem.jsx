import { Component } from 'react';
import { ListItem, Button } from './ContactsListItem.styled';
import PropTypes from 'prop-types';

export class ContactsListItem extends Component {
  render() {
    const { id, name, number } = this.props.item;
    return (
      <ListItem>
        {`${name}: ${number}`}{' '}
        <Button onClick={() => this.props.onDelete(id)}>Delete</Button>
      </ListItem>
    );
  }
}

ContactsListItem.propTypes = {
  item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  onDelete: PropTypes.func.isRequired
};