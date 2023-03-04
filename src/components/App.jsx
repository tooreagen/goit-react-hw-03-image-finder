import { Component } from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {

  };

  render() {
    return (
      <Layout>
        <Searchbar />

        <GlobalStyle />
      </Layout>
    );
  }
}
