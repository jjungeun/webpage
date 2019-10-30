import React, { Component } from 'react';

class PostInfoDetail extends Component {
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

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.state.editMode && !nextState.editMode && nextProps.post === this.props.post)
      return false;
    return true;
  }

  render() {
    const { id, title, content, writer, date } = this.props.post;
    const { editMode } = this.state;

    return (
      <div>
        <h2>{id}</h2>
        <h2>{title}</h2>
        <h2>{content}</h2>
        <h2>{writer}</h2>
        <h2>{date}</h2>
      </div>
    );

  }
}

export default PostInfoDetail;