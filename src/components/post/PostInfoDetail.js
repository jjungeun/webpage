import React, { Component } from 'react';
import './PostInfoDetail.css';

class PostInfoDetail extends Component {
  
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

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    });
  }

  handleRemove = () => {
    const { post, onRemove } = this.props;
    onRemove(post.id);
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

  render() {
    const { id, title, content, writer, date } = this.props.post;
    const { editMode } = this.state;

    if (editMode) {
      return (
        <form className="detail_updateform">
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="title" className="detail_label">제목</label></td>
                <td>
                  <input
                    value={this.state.title}
                    onChange={this.handleUpdate}
                    name="title"
                    maxLength="20"
                    required="required"
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="title" className="detail_label">작성자</label></td>
                <td>
                  <input
                    value={this.state.writer}
                    onChange={this.handleUpdate}
                    name="writer"
                    maxLength="20"
                    required="required"
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="title" className="detail_label">내용</label></td>
                <td>
                  <input
                    className="detail_content"
                    value={this.state.content}
                    onChange={this.handleUpdate}
                    name="content"
                    required="required"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.handleToggle} className="detail_button">update</button>
        </form>
      );
    } else {
      return (
        <form className="detail_form">
          <h1>{title}</h1>
          <label className="detail_label">작성자 : {writer}</label><br/>
          <label className="detail_label">작성일 : {date}</label><br/>
          <div className="detail_content">{content}</div><br/>
          <button onClick={this.handleToggle} className="detail_button">edit</button>
          <button onClick={this.handleRemove} className="detail_button">remove</button>
        </form>
      );
    }
  }
}

export default PostInfoDetail;