import React, { useState } from 'react';
import style from './trainingMain.module.scss';
import Notifications from '../../common/notifications/Notifications';
import Alert from '../../common/alert/Alert';
import Media from '../../common/media/Media';

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
      <Media title="طرحواره شکست" dlSrc="#" type="doc" iconSrc="book" />
      <Media
        title="محرک‌های طرحواره‌ی شکست"
        dlSrc="#"
        type="audio"
        iconSrc="headphone"
      />
      <Media title="طرحواره شکست" dlSrc="#" type="vidio" iconSrc="play" />
      <Media
        title="خلاصه‌ی طرحواره شکست"
        dlSrc="#"
        type="doc"
        iconSrc="file-square"
      />
      <Media
        title="تمرین و نمونه پاسخ"
        dlSrc="#"
        type="doc"
        iconSrc="quiz-square"
      />
    </div>
  );
};

export default TrainingMain;
