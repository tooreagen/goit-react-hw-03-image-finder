import { Component } from 'react';
import { FilterWrap, P, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    return (
      <FilterWrap>
        <P>Find contacts by name</P>
        <Input type="text" onChange={this.props.handleFind} />
      </FilterWrap>
    );
  }
}

Filter.propTypes = {
  handleFind: PropTypes.func.isRequired,
};