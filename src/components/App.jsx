import { Component } from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'API/PixabayAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = { images: [], queryString: '', page: 1, isLoading: false };

  handleSubmit = evt => {
    evt.preventDefault();
    const queryString = evt.currentTarget.elements.search.value;
  this.setState({
    images: [],
    queryString: queryString,
    page: 1,
  });
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.queryString !== this.state.queryString
    ) {
      try {
        this.setState({ isLoading: true });
        const page = this.state.page;
        const queryString = this.state.queryString;
        const imagesObject = await getImages(queryString, page);
        const imagesObjectFiltered = [];
        imagesObject.map(item => {
          return imagesObjectFiltered.push({
            id: item.id,
            webformatURL: item.webformatURL,
            largeImageURL: item.largeImageURL,
          });
        });

        this.setState(prevState => ({
          images: [...prevState.images, ...imagesObjectFiltered],
        }));

      } catch (error) {
        // this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <Layout>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery imagesList={this.state.images} />
        {this.state.images.length !== 0 && (
          <Button handleLoadMore={this.handleLoadMore} />
        )}

        <GlobalStyle />
      </Layout>
    );
  }
}
