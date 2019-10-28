import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PostList from 'components/PostList';
import { AddPost } from 'pages';

class Post extends Component {
  id = 0;
  state = {
    post: [],
    keyword: ''
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
      <div>
        <h2>Post List</h2>
        <PostList
          data={post}
          onUpdate={this.handleUpdate}
          onRemove={this.handleRemove}
        />
        <li><Link exact to="/post/add" component={AddPost}>Add</Link></li>
      </div>
    );
  }
};

export default Post;