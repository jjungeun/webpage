import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { EditPost, DeletePost } from 'pages';


class DetailPost extends Component {
  render() {
    return (
      <div>
        <Route path="/post/:id/edit" component={EditPost} />
        <Route path="/post/:id/delete" component={DeletePost} />
      </div>
    );
  }
}

export default DetailPost;