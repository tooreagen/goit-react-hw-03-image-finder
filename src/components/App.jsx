import { Component } from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {

  };

  render() {
    return (
      <Layout>
        <h1>Testing1</h1>
        <h2>Applications</h2>

        <GlobalStyle />
      </Layout>
    );
  }
}
