import { Component } from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'API/PixabayAPI';

export class App extends Component {
  state = {};

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
      })
      this.setState(imagesObjectFiltered);

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

        <GlobalStyle />
      </Layout>
    );
  }
}

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна
