import { Component } from 'react';
import {
  ImageGalleryListItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <ImageGalleryListItem onClick={this.props.onClick}>
        <ImageGalleryItemImage
          src={this.props.webformatURL}
          alt={this.props.tags}
        />
      </ImageGalleryListItem>
    );
  }
}
