// import Image component
import Image from 'next/image';
import s from './imageItem.module.scss';
import React from 'react';

const ImageItem = React.forwardRef(
  ({ src, alt, className, data, notumb, lazy = 'lazy', ...other }, ref) => {
    return notumb == 'false' || !notumb ? (
      <figure className={`${className} ${s.img}`}>
        <Image
          alt={alt ? alt : 'img'}
          src={src ? src : '/assets/img/notumb/1200x756.png'}
          quality={75}
          loading={lazy}
          ref={ref}
          {...data}
          {...other}
        />
      </figure>
    ) : (
      ''
    );
  }
);

ImageItem.displayName = 'ImageItem';

export default ImageItem;
