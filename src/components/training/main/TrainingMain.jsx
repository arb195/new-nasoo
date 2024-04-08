import React, { useState } from 'react';
import style from './trainingMain.module.scss';
import Notifications from '../../common/notifications/Notifications';
import Alert from '../../common/alert/Alert';
import Media from '../../common/media/Media';
import FAQ from '../../FAQ/faq';
import Comments from '../../comments/Comments';
import Icon from '../../common/icon/icon';
import Link from 'next/link';
import Btn from '../../common/btn/btn';
import TestAnnouncement from '../../test/TestAnnouncement';

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
      <Alert>
        <div className={style.trainingMain__alert__data}>
          <div className={style.trainingMain__alert__data__line}>
            <Icon className={style.trainingMain__icon} src={'watch'} />
            <span>۲۳ ساعت تا شروع کلاس</span>
          </div>
          <div className={style.trainingMain__alert__data__line}>
            <Icon className={style.trainingMain__icon} src={'like'} />
            <span>شما برای شرکت در کلاس آماده هستید.</span>
          </div>
        </div>
        <div className={style.trainingMain__alert__links}>
          <div className={style.trainingMain__alert__links__line}>
            <Link
              href={'#'}
              className={style.trainingMain__alert__links__line__classInfo}
            >
              <Icon width="16" height="16" src={'more-info'} />
              <span>روش‌های ورود به کلاس</span>
            </Link>
            <Link
              href={'#'}
              className={style.trainingMain__alert__links__line__moreInfo}
            >
              <span>بیشتر بدانید</span>
            </Link>
          </div>
          <div className={style.trainingMain__alert__links__buttons}>
            <Btn disabled>ورود به کلاس</Btn>
            <Btn outline={true}>
              کپی لینک
              <Icon className={style.trainingMain__icon} src={'copy-link'} disabled />
            </Btn>
          </div>
        </div>
      </Alert>
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
      <TestAnnouncement title='آزمون آموزه‌ی طرحواره شکست' />
      <FAQ />
      <Comments
        title="یادداشت شما برای این درس"
        note={true}
        placeholder="پیشنهاد میکنیم در زمان مطالعه سوالی پیش اومد بنویسید."
      />
    </div>
  );
};

export default TrainingMain;
