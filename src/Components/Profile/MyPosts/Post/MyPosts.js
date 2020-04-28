import React from "react";
import PostsStyles from "./MyPosts.module.css";
import Post from "./Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post
      message={post.message}
      likesCount={post.likesCount}
  />
  );

  let newPostElement =  React.createRef();

  let addPost = () => {
      props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
      let text = newPostElement.current.value;
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
  }

  return (
    <div className={PostsStyles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value = {props.newPostText} onChange={onPostChange} />
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={PostsStyles.posts}>
          {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
