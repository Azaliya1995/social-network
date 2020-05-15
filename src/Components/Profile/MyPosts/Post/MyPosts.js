import React from "react";
import PostsStyles from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post =>
        <Post message={post.message}
              likesCount={post.likesCount}
              key={post.id}
        />
    );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={PostsStyles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={PostsStyles.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
