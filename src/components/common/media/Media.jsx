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
          <Icon className={style.media__heading__title__icon} src={iconSrc} />
          <span>{title}</span>
        </div>
        <div className={style.media__heading__buttons}>
          {type === 'doc' && <Link href={'#'}>مشاهده</Link>}
          {type === 'doc' && <Link href={dlSrc}>دانلود</Link>}
        </div>
      </div>
      {type === 'audio' && <audio controls src="#" className={style.media__audio}></audio>}
      {type === 'video' && (
        <video controls className={style.media__video}>
          <source src={dlSrc} type="video/webm" />{' '}
        </video>
      )}
    </div>
  );
};

export default Media;
