import { memo } from 'react';

const Icon = ({ src, className, ...other }) => {
  if (src == undefined) {
    return;
  }
  const srcSet = src?.split(' ');

  return (
    <svg className={className} {...other}>
      <use xlinkHref={`#${srcSet[0]}`} />
    </svg>
  );
};
Icon.displayName = 'Icon';

export default memo(Icon);
