import React from "react";
import PostsStyles from "./MyPosts.module.css";
import Post from "./Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
const minLength3 = minLengthCreator(3);

const MyPosts = (props) => {
    let postsElements = props.posts.map(post =>
        <Post message={post.message}
              likesCount={post.likesCount}
              key={post.id}
        />
    );

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    };


    return (
        <div className={PostsStyles.postsBlock}>
            <h3>My posts</h3>

            <AddPostFormRedux onSubmit={addNewPost}/>

            <div className={PostsStyles.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'}
                       component={Textarea}
                       placeholder='Enter your message'
                       validate={[required, maxLength10, minLength3 ]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: 'myPostAddMessageForm'})(AddPostForm);

export default MyPosts;
