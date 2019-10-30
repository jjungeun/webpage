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
  state = {
    editMode: false,
    title: '',
    content: '',
    writer: ''
  }

  handleUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleRemove = () => {
    const { post, onRemove } = this.props;
    onRemove(post.id);
  }

  handleToggle = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { post, onUpdate } = this.props;
    if (!prevState.editMode && this.state.editMode) {
      this.setState({
        title: post.title,
        content: post.content,
        writer: post.writer
      });
    } else if (prevState.editMode && !this.state.editMode) {
      onUpdate(post.id, {
        title: this.state.title,
        content: this.state.content,
        writer: this.state.writer,
      });
    }
  }

  handleClick = () => {
    const { post, onClick } = this.props;
    onClick(post.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.state.editMode && !nextState.editMode && nextProps.post === this.props.post)
      return false;
    return true;
  }

  render() {
    const { id, title, content, writer, date } = this.props.post;
    const { editMode } = this.state;
    if (editMode) {
      return (
        <tr>
          <td className="td">{id}</td>
          <td className="td">
            <input
              placeholder="title"
              value={this.state.title}
              onChange={this.handleUpdate}
              name="title"
              maxLength="20"
              required="required"
            />
          </td>
          <td className="td">
            <input
              placeholder="writer"
              value={this.state.writer}
              onChange={this.handleUpdate}
              name="writer"
              maxLength="20"
              required="required"
            />
          </td>
          <td className="td">
            <input
              placeholder="content"
              value={this.state.content}
              onChange={this.handleUpdate}
              name="content"
              required="required"
            />
          </td>
          <td className="td">{date}</td>
          <button onClick={this.handleToggle} className="td-button">update</button>
          <button onClick={this.handleRemove} className="td-button">remove</button>
        </tr>
      );
    } else {
      return (
        <tr>
          <td className="td">{id}</td>
          <td className="td"><button onClick={this.handleClick}>{title}</button></td>
          <td className="td">{writer}</td>
          <td className="td">{content}</td>
          <td className="td">{date}</td>
          <td>
            <button onClick={this.handleToggle} className="td-button">edit</button>
            <button onClick={this.handleRemove} className="td-button">remove</button>
          </td>
        </tr>
      );
    }
  }
}

export default PostInfo;