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
        <table className="table">
          <thead>
            <tr>
              <th scope="cols" className="table-th">번호</th>
              <th scope="cols" className="table-th">제목</th>
              <th scope="cols" className="table-th">작성자</th>
              <th scope="cols" className="table-th">내용</th>
              <th scope="cols" className="table-th">작성일</th>
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