import React, { Component } from 'react';
import PostForm from 'components/post/PostForm';

class AddPost extends Component {
  render() {
    const { onCreate } = this.props;
    return (
      <div>
        <PostForm onCreate={onCreate} />
      </div>
    );
  }
}

export default AddPost;