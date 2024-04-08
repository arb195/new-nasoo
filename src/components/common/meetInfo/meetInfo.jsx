import s from './meetInfo.module.scss';
import ImageItem from '@/components/common/imageItem/imageItem';
import Icon from '@/components/common/icon/icon';
import BtnLink from '@/components/common/btn/btnLink/btnLink';

const MeetInfo = () => {
  return (
    <div className={s.meetInfo}>
      <ul className={s.meetInfo_content}>
        <li className={s.meetInfo_contentItem}>
          <Icon
            className={s.meetInfo_icon}
            width="26"
            height="26"
            src={'calendar'}
          />
          <span className={s.meetInfo_txt}>۱۲ بهمن ۱۴۰۲</span>
        </li>
        <li className={s.meetInfo_contentItem}>
          <Icon
            className={s.meetInfo_icon}
            width="26"
            height="26"
            src={'watch'}
          />
          <span className={s.meetInfo_txt}>۱۸:۰۰ عصر</span>
        </li>
        <li className={s.meetInfo_contentItem}>
          <Icon
            className={s.meetInfo_icon}
            width="26"
            height="26"
            src={'profile'}
          />
          <span className={s.meetInfo_txt}>آنلاین</span>
        </li>
        <li className={s.meetInfo_contentItem}>
          <Icon
            className={s.meetInfo_icon}
            width="26"
            height="26"
            src={'monitor'}
          />
          <div className={s.meetInfo_btns}>
            <BtnLink text=" ورود به جلسه" link={'/#'} modifier="small" />
            <BtnLink
              text="کپی لینک"
              link={'/#'}
              outline={true}
              icon={{ src: 'copy-link', width: 22, height: 22 }}
              modifier="small"
            />
          </div>
        </li>
      </ul>
      <ImageItem
        className={s.meetInfo_img}
        src={'/assets/img/alert.png'}
        alt={'جلسه فردی'}
        width={208}
        height={208}
      />
    </div>
  );
};

export default MeetInfo;
