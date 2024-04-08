import React from 'react';
import Icon from '../icon/icon';
import Btn from '../btn/btn';
import style from './alert.module.scss';
import Link from 'next/link';
const Alert = () => {
  return (
    <div className={style.alert}>
      <div className={style.alert__contents}>
        <div className={style.alert__contents__data}>
          <div className={style.alert__contents__data__line}>
            <Icon width="24" height="24" src={'watch'} />
            <span>۲۳ ساعت تا شروع کلاس</span>
          </div>
          <div className={style.alert__contents__data__line}>
            <Icon width="24" height="24" src={'like'} />
            <span>شما برای شرکت در کلاس آماده هستید.</span>
          </div>
        </div>
        <div className={style.alert__contents__links}>
          <div className={style.alert__contents__links__line}>
            <Link
              href={'#'}
              className={style.alert__contents__links__line__classInfo}
            >
              <Icon width="16" height="16" src={'more-info'} />
              <span>روش‌های ورود به کلاس</span>
            </Link>
            <Link
              href={'#'}
              className={style.alert__contents__links__line__moreInfo}
            >
              <span>بیشتر بدانید</span>
            </Link>
          </div>
          <div className={style.alert__contents__links__buttons}>
            <Btn disabled>ورود به کلاس</Btn>
            <Btn outline={true}>
              کپی لینک
              <Icon width="24" height="24" src={'copy-link'} disabled />
            </Btn>
          </div>
        </div>
      </div>
      <img src={'/assets/img/alert.png'} className={style.alert__image} />
    </div>
  );
};

export default Alert;
