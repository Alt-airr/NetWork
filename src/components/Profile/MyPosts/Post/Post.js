import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.Posts}>
      <div className={s.Post}>
        <img
          src="https://vignette.wikia.nocookie.net/villains/images/7/7b/Tylerbetterpicture.jpg/revision/latest?cb=20170410170911"
          alt=""/>
        <div className={s.postMessage}>
          {props.message}
        </div>
        <div className={s.likeBar}>
          <span>Likes : </span>{props.likesCount}
        </div>
      </div>
    </div>
  )
}

export default Post;