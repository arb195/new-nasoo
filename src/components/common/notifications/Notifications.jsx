import React from 'react';
import Icon from '../icon/icon';
import Btn from '../btn/btn';
import style from './notification.module.scss';
const Notifications = ({ notificationList, setShowNotification }) => {
  return (
    <div className={style.notification}>
      <div className={style.notification__heading}>
        <Icon className={style.notification__heading__icon} src={'bell'} />
        <span>اعلان‌ها</span>
      </div>
      <ul className={style.notification__list}>
        {notificationList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className={style.notification__buttons}>
        <Btn disabled>متن کامل</Btn>
        <Btn
          onClick={() => setShowNotification(false)}
          className={style.notification__buttons__close}
        >
          بعدا می‌خونم
        </Btn>
      </div>
    </div>
  );
};

export default Notifications;
