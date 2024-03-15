'use client';

import s from './personalMeet.module.scss';
import { NsContainer } from '@/components/common/grid/grid';
import MeetInfo from '@/components/common/meetInfo/meetInfo';
import AletTime from '@/components/common/alertTime/alertTime';
import PersonalMeetForm from './personalMeetForm/personalMeetForm';
import PersonalMeetTable from './personalMeetTable/personalMeetTable';

const PersonalMeet = () => {
  return (
    <div className={s.personalMeet}>
      <NsContainer disableGutters={true}>
        <MeetInfo />
        <AletTime warn={false} url="/buy-time" />
        <PersonalMeetForm />
        <PersonalMeetTable />
      </NsContainer>
    </div>
  );
};

export default PersonalMeet;
