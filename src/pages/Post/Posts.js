import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AddPost, ListPost } from 'pages';
import './Posts.css';

class Post extends Component {
  id = 0;
  state = {
    post: [],
    keyword: ''
  }

  handleCreate = (data) => {
    const { post } = this.state;
    this.setState({
      post: post.concat({ id: this.id++, ...data })
    });
    this.props.history.goBack();
  }

  handleUpdate = (id, data) => {
    const { post } = this.state;
    this.setState({
      post: post.map(post => post.id === id
        ? { ...post, ...data }
        : post
      )
    });
  }

  handleRemove = (id) => {
    const { post } = this.state;
    this.setState({
      post: post.filter(post => post.id !== id)
    });
  }

  render() {
    const { post } = this.state;
    const { match } = this.props;
    // console.log(post);
    return (
      <div>
        <Switch>
          <Route path="/post/add">
            <AddPost onCreate={this.handleCreate} />
          </Route>
          {/* <Route path="/post/:id" component={DetailPost} /> */}
          <Route exact path="/post">
            <ListPost
              data={post}
              onUpdate={this.handleUpdate}
              onRemove={this.handleRemove}
            />
            <Link to={`${match.url}/add`}>
              <button className="Add-button">Add</button>
            </Link>
          </Route>
        </Switch>
      </div >
    );
  }
};

export default Post;