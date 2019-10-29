import React, { Component } from 'react';
import PostList from 'components/PostList';

class ListPost extends Component {
  static defaultProps = {
    post: [],
    onUpdate: () => console.warn('onUpdate not defined'),
    onRemove: () => console.warn('onRemove not defined')
  }

  render() {
    const { data, onUpdate, onRemove } = this.props;
    return (
      <div>
        <h2>Post List</h2>
        <PostList
          data={data}
          onUpdate={onUpdate}
          onRemove={onRemove}
        />
      </div>
    );
  }
}

export default ListPost;