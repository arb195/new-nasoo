'use client';

import s from './userProfile.module.scss';
import { NsContainer } from '@/components/common/grid/grid';
import ProfileHeader from './profileHeader/profileHeader';
import GeneralInfoForm from './generalInfoForm/generalInfoForm';
import CognitiveForm from './cognitiveForm/cognitiveForm';

const UserProfile = () => {
  return (
    <div className={s.userProfile}>
      <ProfileHeader />
      <GeneralInfoForm />
      <CognitiveForm />
    </div>
  );
};

export default UserProfile;
