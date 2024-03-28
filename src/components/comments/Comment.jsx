import React from 'react';
import style from './comments.module.scss';

const Comment = ({ item, i }) => {
  return (
    <div className={style.comment} key={i}>
      {/* avatar and username */}
      <p>{item}</p>
    </div>
  );
};
export default Comment;
