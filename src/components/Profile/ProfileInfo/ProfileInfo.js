import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.profile}>

      <div className={s.descriptionBlock}>
        <img className={s.ava} src="https://vignette.wikia.nocookie.net/villains/images/7/7b/Tylerbetterpicture.jpg/revision/latest?cb=20170410170911" alt=""/>
        <div className={s.description}>
          <h1>Bred Pitt</h1>
          <div className={s.descriptionItem}>
            <p>Birth: <span>23 jun 1983</span></p>
          </div>
          <div className={s.descriptionItem}>
            <p>Education: <span>Harvard University</span></p>
          </div>
          <div className={s.descriptionItem}>
            <p>Profession: <span>Actor</span></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;