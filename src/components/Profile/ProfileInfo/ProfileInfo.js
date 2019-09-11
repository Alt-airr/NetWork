import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.ava}
             src='https://vignette.wikia.nocookie.net/villains/images/7/7b/Tylerbetterpicture.jpg/revision/latest?cb=20170410170911'/>
      </div>
      <div className={s.descriptionBlock}>
        ava + descriptionhhhhhhh
      </div>
    </div>
  )
}

export default ProfileInfo;