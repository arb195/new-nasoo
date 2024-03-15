// import { useMemo } from 'react';
import ImageItem from '@/components/common/imageItem/imageItem';
import Link from 'next/link';
// import logo from 'public/json/logo';

const Logo = ({ hasAnimation = false, width = 128, height = 38, ...other }) => {
  return (
    <>
      <Link href={'/'} style={{ display: 'flex' }} {...other}>
        {hasAnimation ? (
          <ImageItem
            alt="ناسو"
            src={'/assets/img/main_logo.png'}
            width={158}
            height={46}
            loading={'eager'}
          />
        ) : (
          <ImageItem
            alt="ناسو"
            src={'/assets/img/main_logo.png'}
            width={160}
            height={35}
            loading={'eager'}
          />
        )}
      </Link>
    </>
  );
};

export default Logo;
