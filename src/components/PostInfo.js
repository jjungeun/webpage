import React, { Component } from 'react';
import './PostInfo.css';

class PostInfo extends Component {
  static defaultProps = {
    id: 0,
    title: '',
    content: '',
    writer: '',
    date: ''
  }

  handleClick = () => {
    const { post, onClick } = this.props;
    onClick(post.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.post !== this.props.post
  }

  render() {
    const { id, title, content, writer, date } = this.props.post;

    return (
      <tr>
        <td className="td">{id}</td>
        <td className="td"><label onClick={this.handleClick} className="title">{title}</label></td>
        <td className="td">{writer}</td>
        <td className="td">{content}</td>
        <td className="td">{date}</td>
      </tr>
    );
  }
}

export default PostInfo;