import s from './alertTime.module.scss';
import BtnLink from '@/components/common/btn/btnLink/btnLink';
import Icon from '@/components/common/icon/icon';

const AlertTime = ({ warn = false, url = '/#' }) => {
  return (
    <div className={`${s.alertTime} ${warn ? s.alertTime_warn : ''}`}>
      <div className={s.alertTime_right}>
        <Icon
          className={s.alertTime_icon}
          width="26"
          height="26"
          src={'watch'}
        />
        <span className={s.alertTime_txt}>مدت زمان باقی مانده شما:</span>
        <b className={s.alertTime_txtBold}>۱۵ دقیقه</b>
      </div>
      <BtnLink
        className={s.alertTime_link}
        text="افزایش مدت جلسات فردی"
        link={url}
      />
    </div>
  );
};

export default AlertTime;
