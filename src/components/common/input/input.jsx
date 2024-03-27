import { useState } from 'react';
import s from './input.module.scss';
import Icon from '@/components/common/icon/icon';
import React from 'react';

const Input = React.forwardRef(
  (
    {
      type,
      parentClass,
      placeholder = null,
      modifier,
      defaultValue = '',
      name,
      className,
      label,
      topDesc,
      register,
      required,
      error = false,
      icon = false,
      textarea = false,
      onKeyUpFunc,
      ...other
    },
    ref
  ) => {
    const [hasVal, setHasVal] = useState(0);
    const [isshow, setIsShow] = useState(false);
    return (
      <div
        className={`${s.input} ${parentClass ?? ''} ${modifier ? modifier : ''}
        ${className}
        `}
      >
        <span className={s.input_wrapperInput}>
          {label != null ? (
            <span className={`input-title ${s.input_label}`}>{label}</span>
          ) : null}
          {topDesc != null ? (
            <span className={s.input_topDesc}>{topDesc}</span>
          ) : null}
          {textarea ? (
            <textarea
              {...register(name, { required, value: defaultValue })}
              className={`${s.input_field} ${
                hasVal != 0 ? s.input_fieldHasVal : ''
              }`}
              type={isshow ? 'text' : type}
              {...other}
              defaultValue={defaultValue}
              placeholder={placeholder}
              onKeyUp={(e) => {
                setHasVal(e.target.value.length);
              }}
            ></textarea>
          ) : (
            <input
              {...register(name, { required, value: defaultValue })}
              className={`${s.input_field} ${
                hasVal != 0 ? s.input_fieldHasVal : ''
              }`}
              type={isshow ? 'text' : type}
              {...other}
              defaultValue={defaultValue}
              placeholder={placeholder}
              onKeyUp={(e) => {
                setHasVal(e.target.value.length);
                onKeyUpFunc(e);
              }}
            />
          )}
          {type === 'password' && (
            <Icon
              width="24"
              height="24"
              className={s.input_passIcon}
              src={isshow ? 'show' : 'unhide'}
              onClick={() => {
                setIsShow(!isshow);
              }}
            />
          )}
        </span>
        {error[name] ? (
          <span className={s.input_err}>{error[name].message}</span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
