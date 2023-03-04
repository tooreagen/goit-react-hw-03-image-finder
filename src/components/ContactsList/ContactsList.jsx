import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { Component } from 'react';
import { List } from './ContactsList.styled';
import PropTypes from 'prop-types';

export class ContactsList extends Component {
  render() {
    return (
      <List>
        {this.props.contacts
          .filter(item =>
            item.name.toLowerCase().includes(this.props.filterString)
          )
          .map(item => {
            return (
              <ContactsListItem
                key={item.id}
                item={item}
                onDelete={this.props.onDelete}
              />
            );
          })}
      </List>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filterString: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
