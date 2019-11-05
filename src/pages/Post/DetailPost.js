import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostInfoDetail from 'components/PostInfoDetail';
import './DetailPost.css'

class DetailPost extends Component {
  constructor(props) {
    super(props);
    const { data, id } = props;
    this.state = {
      post: data.find(data => (data.id === id))
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextPost = nextProps.data.find(data => (data.id === nextProps.id));
    if (nextPost !== prevState.post) {
      return { post: nextPost }
    }
    return null;
  }

  render() {
    const { match, onUpdate, onRemove } = this.props;
    const { post } = this.state;

    return (
      <div>
        <PostInfoDetail
          post={post}
          onUpdate={onUpdate}
          onRemove={onRemove}
        />
        <Link to={`${match.url}`}>
          <button className="List-button">List</button>
        </Link>
      </div>
    );
  }
}

export default DetailPost;