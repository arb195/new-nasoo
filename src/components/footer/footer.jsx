'use client';

import s from './footer.module.scss';
import { useCheckBreakpoint } from '@/hook/useMediaQuery';
import Icon from '@/components/common/icon/icon';
import Link from 'next/link';

const Footer = ({ device = null }) => {
  const [checkRes] = useCheckBreakpoint(device);
  return (
    <span>
      {checkRes(['xxs', 'xs', 'sm']) ? (
        <div className={s.footer_mobile}>
          <Link href="#" className={s.footer_icon}>
            <Icon width="32" height="32" src="setting-square" />
          </Link>
          <Link href="#" className={s.footer_icon}>
            <Icon width="32" height="32" src="message" />
          </Link>
          <Link href="#" className={s.footer_icon}>
            <Icon width="32" height="32" src="evaluation" />
          </Link>
          <Link href="#" className={s.footer_icon}>
            <Icon width="32" height="32" src="bell" />
          </Link>
          <Link href="/profile" className={s.footer_icon}>
            <Icon width="32" height="32" src="profile-circle" />
          </Link>
        </div>
      ) : (
        ''
      )}
    </span>
  );
};

export default Footer;
