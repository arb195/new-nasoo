'use client';

import ImageItem from '@/components/common/imageItem/imageItem';
import s from './notFound.module.scss';
import { NsContainer } from '@/components/common/grid/grid';
import BtnLink from '@/components/common/btn/btnLink/btnLink';
import { useCheckBreakpoint } from '@/hook/useMediaQuery';

const NotFound = ({ device = null }) => {
  const [checkRes] = useCheckBreakpoint(device);
  return (
    <NsContainer disableGutters={true}>
      <div className={s.notfound}>
        <div className={s.notfound_wrapper}>
          <div className={s.notfound_text}>
            <div className={s.texts}>
              <h1>اوه...</h1>
              <h2>صفحه مورد نظر پیدا نشد.</h2>
              <p>
                به نظر می رسد در این مکان هیچ چیزی پیدا نشده است. ممکن است یکی
                از لینک های زیر را امتحان کنید یا یک جستجو؟
              </p>
            </div>
            <BtnLink
              className={s.payInfo_btnBack}
              outline={true}
              text="بازگشت به صفحه اصلی  "
              link={'/'}
            />
          </div>
          <div className={s.notfound_img}>
            <ImageItem
              src={'/assets/img/error.png'}
              alt={'404'}
              width={!checkRes(['xxs', 'xs', 'sm']) ? 730 : 400}
              height={!checkRes(['xxs', 'xs', 'sm']) ? 650 : 350}
            />
          </div>
        </div>
      </div>
    </NsContainer>
  );
};

export default NotFound;
