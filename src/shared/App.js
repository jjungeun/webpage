import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, IndexPost } from 'pages';
import Menu from 'components/Menu';
import {
  initFire,
  initID,
  createPostToDB,
  updatePostToDB,
  deletePostToDB
} from './Firebase';

class App extends Component {
  state = {
    idLoading: false,
    postLoading: false,
    id: 0,
    posts: []
  }

  componentDidMount() {
    initID().get().then(res => {
      this.setState({
        idLoading: true,
        id: res.data().id
      })
    });

    initFire().get().then(res => {
      let postsFromDB = []
      res.forEach((doc) => {
        postsFromDB.push(doc.data());
      })
      this.setState({
        postLoading: true,
        posts: postsFromDB
      })
    });
  }

  handleCreate = (data) => {
    const { id, posts } = this.state;
    createPostToDB({ id: id, ...data });
    this.setState({
      id: id + 1,
      posts: posts.concat({ id: id, ...data })
    });
  }

  handleUpdate = (id, data) => {
    const { posts } = this.state;
    updatePostToDB(id, data);
    this.setState({
      posts: posts.map(post => post.id === id
        ? { ...post, ...data }
        : post
      )
    });
  }

  handleDelete = (id) => {
    const { posts } = this.state;
    deletePostToDB(id);
    this.setState({
      posts: posts.filter(post => post.id !== id)
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state;
  }

  render() {
    const { idLoading, id, postLoading, posts } = this.state;
    if (idLoading && postLoading) {
      return (
        <div className="App">
          <Menu />
          <Route exact path="/" component={Home} />
          <Route
            path="/post"
            render={(props) => <IndexPost
              {...props}
              id={id}
              post={posts}
              onCreate={this.handleCreate}
              onUpdate={this.handleUpdate}
              onDelete={this.handleDelete}
            />}
          />
        </div >
      );
    } else {
      return (
        <div className="App">
          <Menu />
          <Route exact path="/" component={Home} />
        </div >
      );
    }
  }
}

export default App;
