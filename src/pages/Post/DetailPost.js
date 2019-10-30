import React, { Component } from 'react';
import { EditPost, DeletePost } from 'pages';
import PostInfoDetail from 'components/PostInfoDetail';

class DetailPost extends Component {
  render() {
    const { data, onUpdate, onRemove } = this.props;

    return (
      <div>
        <PostInfoDetail
          post={data[0]}
          onUpdate={onUpdate}
          onRemove={onRemove}
        />
        {/* <Route path="/post/:id/edit" component={EditPost} />
        <Route path="/post/:id/delete" component={DeletePost} /> */}
      </div>
    );
  }
}

export default DetailPost;