import s from './skeleton.module.scss';

const Skeleton = ({ width, height, variant, style, animation,align, className }) => {
  return (
    <div
      className={`${s.skeleton} ${animation == 'wave' ? s.skeleton_wave : ''}
      ${align == 'vertical' ? s.skeleton_vertical : ''}
      ${
        variant == 'circle' ? s.skeleton_circle : ''
      } ${className ? className : ''}`}
      style={{ width: width, height: height, ...style }}
    ></div>
  );
};

export default Skeleton;
