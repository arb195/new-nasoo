import { memo } from 'react';

const Icon = ({ src, ...other }) => {
  if (src == undefined) {
    return;
  }
  const srcSet = src?.split(' ');

  return (
    <svg {...other}>
      <use xlinkHref={`#${srcSet[0]}`} />
    </svg>
  );
};
Icon.displayName = 'Icon';

export default memo(Icon);
