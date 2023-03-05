import { Component } from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'API/PixabayAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = { images: [] };

  handleSubmit = async evt => {
    evt.preventDefault();
    const queryString = evt.currentTarget.elements.search.value;

    try {
      const imagesObject = await getImages(queryString);
      const imagesObjectFiltered = [];
      imagesObject.map(item => {
        imagesObjectFiltered.push({
          id: item.id,
          webformatURL: item.webformatURL,
          largeImageURL: item.largeImageURL,
        });
      });
      this.setState({ images: imagesObjectFiltered });

      // this.setState({ articles });
    } catch (error) {
      // this.setState({ error });
    } finally {
      // this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <Layout>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery imagesList={this.state.images} />

        <GlobalStyle />
      </Layout>
    );
  }
}

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна
