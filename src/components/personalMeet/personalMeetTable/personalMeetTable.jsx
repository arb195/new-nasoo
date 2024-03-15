'use client';

import s from './personalMeetTable.module.scss';
import ImageItem from '@/components/common/imageItem/imageItem';

const PersonalMeetTable = () => {
  return (
    <div className={s.meetTable}>
      <ImageItem
        src={'/assets/img/meetTable.png'}
        alt={'جلسه فردی'}
        width={1351}
        height={514}
      />
    </div>
  );
};

export default PersonalMeetTable;
