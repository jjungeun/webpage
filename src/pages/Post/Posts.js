import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AddPost, ListPost, DetailPost } from 'pages';
import './Posts.css';

class Post extends Component {
  id = 1;
  state = {
    post: [{ id: 0, title: 'hello', writer: 'jungeun', content: 'world', date: new Date().toLocaleString() }],
    filterId: '',
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
    this.props.history.replace(`/post/` + id);
  }

  handleRemove = (id) => {
    const { post } = this.state;
    this.setState({
      post: post.filter(post => post.id !== id)
    });
    this.props.history.replace(`/post`);
  }

  handleClick = (id) => {
    this.setState({
      filterId: id
    })
    this.props.history.push(`post/` + id);
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state;
  }

  render() {
    const { post, filterId, keyword } = this.state;
    const { match } = this.props;
    const keywordList = post.filter(
      post => post.title.indexOf(keyword) !== -1
    );

    return (
      <div>
        <Switch>
          <Route path="/post/add">
            <AddPost onCreate={this.handleCreate} />
          </Route>
          <Route path={`/post/:id`} render={() => (
            <DetailPost
              {...this.props}
              data={post}
              id={filterId}
              onUpdate={this.handleUpdate}
              onRemove={this.handleRemove}
            />
          )} />
          <Route exact path="/post">
            <p>
              <input
                placeholder="search post"
                onChange={this.handleChange}
                value={keyword}
              />
            </p>
            <ListPost
              data={keywordList}
              onClick={this.handleClick}
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