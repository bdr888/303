import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

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
      <div className="App">
        {this.state.posts.map(post => (
          <div key={post.id}>
            <div>{post.title.rendered}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
