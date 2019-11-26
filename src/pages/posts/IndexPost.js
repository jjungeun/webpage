import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AddPost, ListPost, DetailPost } from 'pages';
import './IndexPost.css';

class IndexPost extends Component {
  state = {
    post: [],
    filterId: '',
    keyword: ''
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextPost = nextProps.post;
    if (nextPost !== prevState.post) {
      return { post: nextPost }
    }
    return null;
  }

  handleCreate = (data) => {
    const { onCreate } = this.props;
    onCreate({ ...data });
    this.props.history.goBack();
  }

  handleUpdate = (id, data) => {
    const { onUpdate } = this.props;
    onUpdate(id, data);
    this.props.history.replace(`/post/` + id);
  }

  handleRemove = (id) => {
    const { onDelete } = this.props;
    onDelete(id);
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
      console.log(this.props),
      < div >
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

export default IndexPost;