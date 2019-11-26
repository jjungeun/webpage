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
    id: 0,
    posts: []
  }

  componentWillMount() {
    initID().get().then(res => {
      this.setState({
        id: res.data().id
      })
    });

    initFire().get().then(res => {
      let postsFromDB = []
      res.forEach((doc) => {
        postsFromDB.push(doc.data());
      })
      this.setState({
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
    const { id, posts } = this.state;
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
  }
}

export default App;
