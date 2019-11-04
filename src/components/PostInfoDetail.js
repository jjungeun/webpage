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

    if(editMode){
      return(
        <form className="Form">
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="title" className="label">제목</label></td>
                <td>
                  <input
                    className="Form-title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                    maxLength="20"
                    required="required"
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="title" className="label">작성자</label></td>
                <td>
                  <input
                    className="Form-writer"
                    value={this.state.writer}
                    onChange={this.handleChange}
                    name="writer"
                    maxLength="20"
                    required="required"
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="title" className="label">내용</label></td>
                <td>
                  <input
                    className="Form-content"
                    value={this.state.content}
                    onChange={this.handleChange}
                    name="content"
                    required="required"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.handleToggle} className="td-button">update</button>
          <button onClick={this.handleRemove} className="td-button">remove</button>
        </form>
      );
    } else{
      return (
        <form className="Form">
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="title" className="label">번호</label></td>
                <td>{id}</td>
              </tr>
              <tr>
                <td><label htmlFor="title" className="label">제목</label></td>
                <td>{title}</td>
              </tr>
              <tr>
                <td><label htmlFor="title" className="label">내용</label></td>
                <td>{content}</td>
              </tr>
              <tr>
                <td><label htmlFor="title" className="label">작성자</label></td>
                <td>{writer}</td>
              </tr>
              <tr>
                <td><label htmlFor="title" className="label">작성일</label></td>
                <td>{date}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.handleToggle} className="td-button">edit</button>
          <button onClick={this.handleRemove} className="td-button">remove</button>
        </form>
      );
    }
  }
}

export default PostInfoDetail;