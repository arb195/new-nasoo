import React, { memo } from 'react';
import s from './userInfoCard.module.scss';
// import Loading from '@/components/common/loading/loading';

const UserInfoCard = ({ data }) => {
  return (
    <ul className={s.userInfo}>
      {data?.map((item, index) => {
        return (
          <li key={index} className={s.userInfo_item}>
            <span>{item.title}</span>
            <span>{item.value}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(UserInfoCard);
