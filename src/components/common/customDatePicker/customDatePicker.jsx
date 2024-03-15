import { useState } from 'react';
import s from './customDatePicker.module.scss';
import { DatePicker } from 'zaman';
import Icon from '@/components/common/icon/icon';
const CustomDatePicker = ({
  label,
  bottomDesc,
  className,
  FormController,
  formControl,
}) => {
  const [hasVal, setHasVal] = useState(0);
  return (
    <div className={`${s.datePicker} ${className}`}>
      {label && (
        <span className={`input-title ${s.datePicker_lable}`}>{label}</span>
      )}
      <div
        className={`${s.datePicker_date} ${
          hasVal != 0 ? s.datePicker_fieldHasVal : ''
        }`}
      >
        <FormController
          control={formControl}
          name="date"
          render={({ field }) => (
            <DatePicker
              round="x4"
              position="center"
              inputAttributes={{
                placeholder: 'تاریخ تولد خود را انتخاب کنید.',
              }}
              onChange={(e) => {
                field.onChange(
                  new Date(e.value).toLocaleDateString('fa-IR-u-nu-latn')
                );
                setHasVal(e.value.length);
              }}
            />
          )}
        />
        <Icon
          className={s.datePicker_date__icon}
          width="24"
          height="24"
          src={'down'}
        />
      </div>
      {bottomDesc && (
        <span className={`input-bottom-desc ${s.datePicker_desc}`}>
          {bottomDesc}
        </span>
      )}
    </div>
  );
};

export default CustomDatePicker;
