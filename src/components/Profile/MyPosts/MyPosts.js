import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements =
    props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div className={s.Posts}>
        <div className={s.addPostArea}>

          <div className={s.addPostForm}>
                        <textarea className={s.postInput}
                                  onChange={onPostChange}
                                  value={props.newPostText}
                                  ref={newPostElement} cols="30" rows="1"/>
            <span className={s.bar}></span>
            <label>What's new?</label>
          </div>
          <div className={s.buttons}>
            <button className={s.postButton} onClick={onAddPost}>Send</button>
            {/*<button className={s.postButton} onClick={onRemoveText}>Remove</button>*/}
          </div>

        </div>
        <h2>My Posts:</h2>
        {postsElements}
      </div>
    </div>



  )
}

export default MyPosts;