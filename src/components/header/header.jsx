'use client';

import s from './header.module.scss';
import Icon from '@/components/common/icon/icon';
import Link from 'next/link';
import { NsContainer, NsRow, NsCol } from '@/components/common/grid/grid';
import { useCheckBreakpoint } from '@/hook/useMediaQuery';

const Header = ({ device }) => {
  const [checkRes] = useCheckBreakpoint(device);
  return (
    <header className={s.siteHeader}>
      <NsContainer disableGutters={true}>
        <NsRow container>
          <NsCol item xsss={24} md={12}>
            <div className={s.siteHeader_right}>
              <Icon
                className={s.siteHeader_logo}
                width="44"
                height="19"
                src="header-logo"
              />
              <div className={s.siteHeader_items}>
                <Link href="/training" className={s.siteHeader_item}>
                  آموزش
                </Link>
                <Link href="/personal-meet" className={s.siteHeader_item}>
                  جلسات فردی
                </Link>
                <Link href="/gathering" className={s.siteHeader_item}>
                  گردهمایی
                </Link>
              </div>
            </div>
          </NsCol>
          {!checkRes(['xxs', 'xs', 'sm']) ? (
            <NsCol item md={12}>
              <div className={s.siteHeader_left}>
                <Link href="#" className={s.siteHeader_icon}>
                  <Icon width="32" height="32" src="message" />
                </Link>
                <Link href="#" className={s.siteHeader_icon}>
                  <Icon width="32" height="32" src="evaluation" />
                </Link>
                <Link href="#" className={s.siteHeader_icon}>
                  <Icon width="32" height="32" src="notification" />
                </Link>
                <Link href="/profile" className={s.siteHeader_icon}>
                  <Icon width="32" height="32" src="profile-circle" />
                </Link>
              </div>
            </NsCol>
          ) : (
            ''
          )}
        </NsRow>
      </NsContainer>
    </header>
  );
};

export default Header;
