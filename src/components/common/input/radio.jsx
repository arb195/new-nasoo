import s from './radio.module.scss';
import React from 'react';

const Radio = React.forwardRef(
  ({
    id,
    parentClass,
    modifier,
    val = '',
    name,
    className,
    label,
    htmllabel,
    topDesc,
    register,
    required,
    error = false,
  }) => {
    return (
      <div
        className={`${s.radio} ${parentClass ?? ''} ${modifier ? modifier : ''}
        ${className}
        `}
      >
        <span className={s.radio_wrapperradio}>
          {label != null ? (
            <span className={`input-title ${s.radio_label}`}>{label}</span>
          ) : null}
          {topDesc != null ? (
            <span className={s.radio_topDesc}>{topDesc}</span>
          ) : null}

          <input
            {...register(name, { required })}
            className={`${s.radio_field}`}
            type="radio"
            value={val}
            id={id}
          />
          <label htmlFor={id}>{htmllabel}</label>
        </span>
        {error[name] ? (
          <span className={s.radio_err}>{error[name].message}</span>
        ) : null}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
