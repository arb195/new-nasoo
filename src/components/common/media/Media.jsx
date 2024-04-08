import React from 'react';
import style from './media.module.scss';
import Link from 'next/link';
import Icon from '../icon/icon';

const Media = ({ title, dlSrc, type, iconSrc }) => {
  return (
    <div className={style.media}>
      <input type="checkbox" className={style.media__checkbox} />
      <div className={style.media__heading}>
        <div className={style.media__heading__title}>
          <Icon width="20" height="20" src={iconSrc} />
          <span>{title}</span>
        </div>
        <div className={style.media__heading__buttons}>
          {type === 'doc' && <Link href={'#'}>مشاهده</Link>}
          {type !== 'video' && <Link href={dlSrc}>دانلود</Link>}
        </div>
      </div>
      {type === 'audio' && <audio controls src="#"></audio>}
      {type === 'video' && (
        <video controls>
          <source src={dlSrc} type="video/webm" />{' '}
        </video>
      )}
    </div>
  );
};

export default Media;
