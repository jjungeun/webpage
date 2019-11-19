import React, { Component } from 'react';
import PostList from 'components/post/PostList';

class ListPost extends Component {
  static defaultProps = {
    post: [],
    onUpdate: () => console.warn('onUpdate not defined'),
    onRemove: () => console.warn('onRemove not defined')
  }

  render() {
    const { data, onUpdate, onRemove, onClick } = this.props;
    return (
      <div>
        <h2>Post List</h2>
        <PostList
          data={data.sort((a, b) => a.id - b.id)}
          onUpdate={onUpdate}
          onRemove={onRemove}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default ListPost;