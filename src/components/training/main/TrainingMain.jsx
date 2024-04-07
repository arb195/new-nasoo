import React, { useState } from 'react';
import style from './trainingMain.module.scss';
import Notifications from '../../common/notifications/Notifications';
import Alert from '../../common/alert/Alert';

const notificationList = [
  'هفته‌ی آینده در تاریخ ۰۶/۲۱ کلاس تشکیل نمی‌شود.',
  'محتوای هفته دوم آموزه به روز رسانی شده است.محتوای هفته دوم آموزه به روز رسانی شده است.محتوای هفته دوم آموزه به روز رسانی شده است.',
  'هفته‌ی آینده در تاریخ ۰۶/۲۱ کلاس تشکیل نمی‌شود برای اطلاعات بیشتر کافیه اینجا کلیک کنید.',
];

const TrainingMain = () => {
  const [showNotification, setShowNotification] = useState(true);
  return (
    <div className={style.trainingMain}>
      {showNotification && (
        <Notifications
          notificationList={notificationList}
          setShowNotification={setShowNotification}
        />
      )}
      <Alert />
    </div>
  );
};

export default TrainingMain;
