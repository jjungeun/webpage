import React, { Component } from 'react';
import PostForm from 'components/PostForm';

class AddPost extends Component {

  handleCreate = (data) => {
    const { post } = this.state;
    this.setState({
      post: post.concat({ id: this.id++, ...data })
    });
  }
  render() {
    return (
      <div>
        <PostForm onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default AddPost;