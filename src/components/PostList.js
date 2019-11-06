import React, { Component } from 'react';
import PostInfo from './PostInfo';
import './PostList.css';

class PostList extends Component {
  static defaultProps = {
    post: []
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    const { data, onClick } = this.props;

    return (
      <div>
        <table className="postlist_table">
          <thead>
            <tr>
              <th scope="cols" className="no">No</th>
              <th scope="cols" className="title">제목</th>
              <th scope="cols">작성자</th>
              <th scope="cols">작성일</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              post => (
                <PostInfo
                  key={post.id}
                  post={post}
                  onClick={onClick}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PostList;