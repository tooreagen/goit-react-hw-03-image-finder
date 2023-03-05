import { Component } from 'react';
import {
  ImageGalleryListItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <ImageGalleryListItem>
        <ImageGalleryItemImage src={this.props.webformatURL} alt="" />
      </ImageGalleryListItem>
    );
  }
}