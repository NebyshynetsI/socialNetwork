import p from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p=><Post message={p.message} key={p.id} likesCount={p.likesCount} />);
    let onAddPost =() => {
        props.addPost();
    };
    let onPostChange = (e) =>{
        let text = e.target.value;
        props.updateNewPostText(text);        

    };
    return (
        <div className={p.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} placeholder='Enter your message' value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={p.posts}>                
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;