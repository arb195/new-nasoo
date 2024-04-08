import React from 'react';
import style from './test.module.scss';
import Btn from '../common/btn/btn';
import Icon from '../common/icon/icon';

const TestAnnouncement = ({ title }) => {
  return (
    <div className={style.testAnnouncement}>
      <div className={style.testAnnouncement__content}>
        <div className={style.testAnnouncement__content__data}>
          <div className={style.testAnnouncement__content__data__heading}>
            <Icon
              className={style.testAnnouncement__content__data__heading__icon}
              src={'file'}
            />
            <span>{title}</span>
          </div>

          <p className={style.testAnnouncement__content__data__midline}>
            ۲۵ سوال{' '}
          </p>
          <div className={style.testAnnouncement__content__data__sugests}>
            <p>پیشنهاد می‌کنیم:</p>
            <ul>
              <li> بعد از مطالعه‌ی محتوای آموزشی در آزمون شرکت کنید.</li>
              <li>
                زمانی که از نظر ذهنی در شرایط مطلوبی هستید در آزمون شرکت کنید.
              </li>
              <li> پس از آزمون، پاسخ نامه را بررسی کنید.</li>
            </ul>
          </div>
        </div>
        <img
          src={'/assets/img/exam.png'}
          className={style.testAnnouncement__content__image}
        />
      </div>
      <Btn className={style.testAnnouncement__button} disabled>
        می‌خواهم در آزمون شرکت کنم
      </Btn>
    </div>
  );
};

export default TestAnnouncement;
