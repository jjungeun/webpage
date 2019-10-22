import React, { Component } from 'react';
import './PostForm.css'

class PostForm extends Component {
  state = {
    title: '',
    content: '',
    writer: '',
    date: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      date: new Date().toLocaleString()
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      title: '',
      content: '',
      writer: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <h2>방명록</h2>
        <table >
          <tr>
            <td><label for="title" className="label">제목</label></td>
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
            <td><label for="title" className="label">작성자</label></td>
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
            <td><label for="title" className="label">내용</label></td>
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
        </table>
        <div>
          <button type="submit" className="Form-button">post</button>
        </div>
      </form >
    );
  }
}

export default PostForm;

