import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts, fetchPostsAndUsers } from "../actions";
import UserList from "./UserList";
import Loader from './Loader';

class PostList extends Component {
    
  componentDidMount() {
    this.props.fetchPostsAndUsers();
    console.log(this.props.posts);
  }

  renderList() {
    return this.props.posts.map((post) => (

      
      
      <div key={post.id} className="item">
        
        
        
        <i className="large middle aligned user  icon"></i>
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
          </div>
          <p>{post.body}</p>
          <h3>{post.address}</h3>
          <UserList userId={post.userId} />
        </div>
      </div>
     
      
      
    ));
  }

  render() {
    if (!this.props.posts) {
      return null;
    }
    return  <div className="ui relaxed divided list">
      <Loader/>
      {this.renderList()}
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(
  PostList
);
