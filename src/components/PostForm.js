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
      <form onSubmit={this.handleSubmit} className="postform_form">
        <h2>게시글</h2>
        <table className="postform_table">
          <tbody>
            <tr>
              <td><label htmlFor="title" className="postform_label">제목</label></td>
              <td>
                <input
                  value={this.state.title}
                  onChange={this.handleChange}
                  name="title"
                  maxLength="20"
                  required="required"
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="title" className="postform_label">작성자</label></td>
              <td>
                <input
                  value={this.state.writer}
                  onChange={this.handleChange}
                  name="writer"
                  maxLength="20"
                  required="required"
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="title" className="postform_label">내용</label></td>
              <td>
                <input
                  className=".postform_content"
                  value={this.state.content}
                  onChange={this.handleChange}
                  name="content"
                  required="required"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="submit" className="postform_button">post</button>
        </div>
      </form >
    );
  }
}

export default PostForm;

