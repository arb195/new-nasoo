import React, { memo } from 'react';
import s from './btnLink.module.scss';
import Link from 'next/link';
import Icon from '@/components/common/icon/icon';

const BtnLink = ({
  text,
  link,
  icon,
  outline = false,
  className,
  modifier,
}) => {
  let modifiers =
    modifier &&
    modifier.split(' ').map((item) => {
      return s[item];
    });
  return (
    <Link
      className={` ${s.btnLink} ${
        outline ? s.btnLink_outline : s.btnLink_normal
      } ${modifiers ? modifiers.join(' ') : ''}
      ${className ? className : ''}
      `}
      prefetch={false}
      href={link}
    >
      {text}
      {icon && (
        <Icon width={icon?.width} height={icon?.height} src={icon?.src} />
      )}
    </Link>
  );
};

export default memo(BtnLink);
