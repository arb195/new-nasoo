import s from './loading.module.scss';

const Loading = ({
  modifier,
  mainClass,
  className,
  variant,
  width = 20,
  height = 20,
  text,
  center,
}) => {

  let modifiers =
    modifier &&
    modifier.split(' ')?.map((item) => {
      return s[item];
    });

  return (
    <div
      className={`${s.loading_wrapper} ${
        center ? s.loading_wrapper__center : ''
      }
      ${mainClass ? mainClass : ''}
      `}
    >
      {variant == 'circle' ? (
        <div
          className={`${s.loader} ${s.center}`}
          style={{
            width: width,
            height: height,
          }}
        >
          <span></span>
        </div>
      ) : (
        <div
          className={`${s.load} ${className ? className : ''} ${
            modifiers ? modifiers : ''
          }`}
        >
          <div className={s.load_one}></div>
          <div className={s.load_two}></div>
          <div className={s.load_three}></div>
        </div>
      )}
      {text && <span className={s.loading_text}>{text}</span>}
    </div>
  );
};

export default Loading;
