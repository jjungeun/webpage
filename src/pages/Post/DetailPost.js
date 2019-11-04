import React, { Component } from 'react';
import PostInfoDetail from 'components/PostInfoDetail';

class DetailPost extends Component {
  constructor(props){
    super(props);
    const { data, id } = this.props;
    this.state = {
      post: data.find(data => (data.id === id))
    };
  }

  render() {
    const { onUpdate, onRemove, onClick } = this.props;
    const { post } = this.state;
    return (
      <div>
        <PostInfoDetail
          post={post}
          onUpdate={onUpdate}
          onRemove={onRemove}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default DetailPost;