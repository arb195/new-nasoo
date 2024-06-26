'use client';

import s from './profileHeader.module.scss';
import { NsContainer } from '@/components/common/grid/grid';
import ImageItem from '@/components/common/imageItem/imageItem';
import Btn from '@/components/common/btn/btn';
import Icon from '@/components/common/icon/icon';
import { useCheckBreakpoint } from '@/hook/useMediaQuery';
import { useModal } from '@/hook/useModal';
import CustomModal from '@/components/common/modals/customModal/customModal';
import ProfileModal from '@/components/common/modals/profileModal/profileModal';
import dataSlider from '@/components/common/modals/profileModal/dataSlider.json';

const ProfileHeader = ({ device, profimg = false }) => {
  const [checkRes] = useCheckBreakpoint(device);
  const [openModaBanner, toggleBanner] = useModal();
  const [openModaProfile, toggleProfile] = useModal();

  return (
    <div className={s.profHeader}>
      <div className={s.profHeader_posterWrapper}>
        <CustomModal
          modifier="modal__borderLess"
          status={openModaBanner}
          onClose={toggleBanner}
          title={'سوال جدید'}
        >
          <ProfileModal
            title="پس زمینه خود را می‌توانید از بین تصاویر زیر انتخاب کنید"
            data={dataSlider?.banner}
          />
        </CustomModal>
        <CustomModal
          modifier="modal__borderLess"
          status={openModaProfile}
          onClose={toggleProfile}
          title={'سوال جدید'}
        >
          <ProfileModal
            title="تصویر پروفایل خود را می‌توانید از بین تصاویر زیر انتخاب کنید"
            data={dataSlider?.profile}
          />
        </CustomModal>
        <ImageItem
          src={'/assets/img/prof-bg.png'}
          alt={'جلسه فردی'}
          fill={true}
          className={s.profHeader_poster}
        />
        <span
          className={s.profHeader_posterIcon}
          onClick={() => toggleBanner(true)}
        >
          <Icon width="24" height="24" src={'camera'} />
        </span>
      </div>
      <NsContainer className={s.profHeader_profContainer}>
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
            <span
              className={s.profHeader_changProf}
              onClick={() => toggleProfile(true)}
            >
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
