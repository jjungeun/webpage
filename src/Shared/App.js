import React, { Component } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import './App.css';

class App extends Component {
  id = 0;
  state = {
    post: [],
    keyword: ''
  }

  handleCreate = (data) => {
    const { post } = this.state;
    this.setState({
      post: post.concat({ id: this.id++, ...data })
    });
  }

  handleUpdate = (id, data) => {
    const { post } = this.state;
    this.setState({
      post: post.map(post => post.id === id
        ? { ...post, ...data }
        : post
      )
    });
  }

  handleRemove = (id) => {
    const { post } = this.state;
    this.setState({
      post: post.filter(post => post.id !== id)
    });
  }

  render() {
    const { post } = this.state;
    return (
      <div className="App">
        <PostForm onCreate={this.handleCreate} />
        <PostList
          data={post}
          onUpdate={this.handleUpdate}
          onRemove={this.handleRemove}
        />
      </div >
    );
  }
}

export default App;
