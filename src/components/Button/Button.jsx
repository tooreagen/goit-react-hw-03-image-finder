import { Component } from "react";
import { ButtonLoadMore } from './Button.styled';

export class Button extends Component {
    render() {
        return (
          <ButtonLoadMore type="button" onClick={this.props.handleLoadMore}>
            Load more
          </ButtonLoadMore>
        );
    }
}