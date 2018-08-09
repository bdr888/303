import React, { Component } from 'react';
import Posts from './Posts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    fetch('https://thewirecutter.com/wp-json/wp/v2/posts')
      .then(response => {
        return response.json();
      })
      .then(myJson => this.setState({ posts: myJson }));
  };

  render() {
    return (
      <Posts posts={this.state.posts} />
    );
  }
}

export default App;
