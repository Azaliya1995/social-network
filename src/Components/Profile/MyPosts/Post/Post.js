import React from "react";
import PostStyle from "./Post.module.css";
import Avatar from "../../../Dialogs/Avatar";

const Post = (props) => {
  return (
    <div className={PostStyle.item}>
        <Avatar user={props.author}/>
       {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
