'use client';

import s from './profileHeader.module.scss';
import { NsContainer } from '@/components/common/grid/grid';
import ImageItem from '@/components/common/imageItem/imageItem';
import Btn from '@/components/common/btn/btn';
import Icon from '@/components/common/icon/icon';
import { useCheckBreakpoint } from '@/hook/useMediaQuery';

const ProfileHeader = ({ device, profimg = false }) => {
  const [checkRes] = useCheckBreakpoint(device);
  return (
    <div className={s.profHeader}>
      <div className={s.profHeader_posterWrapper}>
        <ImageItem
          src={'/assets/img/prof-bg.png'}
          alt={'جلسه فردی'}
          fill={true}
          className={s.profHeader_poster}
        />
        <span className={s.profHeader_posterIcon}>
          <Icon width="24" height="24" src={'camera'} />
        </span>
      </div>
      <NsContainer className={s.profHeader_profContainer} >
        <div className={s.profHeader_profWrapper}>
          {profimg ? (
            <ImageItem
              src={'/assets/img/prof1.png'}
              alt={'جلسه فردی'}
              height={!checkRes(['xxs', 'xs', 'sm']) ? 325 : 111}
              width={!checkRes(['xxs', 'xs', 'sm']) ? 325 : 111}
              className={s.profHeader_profImg}
            />
          ) : (
            <Icon
              height={!checkRes(['xxs', 'xs', 'sm']) ? 325 : 111}
              width={!checkRes(['xxs', 'xs', 'sm']) ? 325 : 111}
              className={s.profHeader_profImg}
              src={'profile-circle'}
            />
          )}
          <div className={s.profHeader_infoWrapper}>
            <h1 className={s.profHeader_name}>محدثه ابراهیم</h1>
            <span className={s.profHeader_changProf}>
              <Icon width="16" height="16" src={'add'} />
              انتخاب پروفایل
            </span>
          </div>
        </div>
      </NsContainer>
    </div>
  );
};

export default ProfileHeader;
