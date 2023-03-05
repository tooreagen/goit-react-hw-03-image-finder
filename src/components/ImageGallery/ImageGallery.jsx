import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  render() {
    console.log(this.props.imagesList);
    return (
      <ImageGalleryList>
        {this.props.imagesList.map(item => {
          return (
            <ImageGalleryItem
              key={item.id}
              webformatURL={item.webformatURL}
              largeImageURL={item.largeImageURL}
            />
          );
        })}
      </ImageGalleryList>
    );
  }
}

ImageGallery.propTypes = {
  imagesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
