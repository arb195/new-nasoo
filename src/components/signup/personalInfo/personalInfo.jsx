'use client';

import s from './personalInfo.module.scss';
import Input from '@/root/src/components/common/input/input';
import SelectField from '@/components/common/input/select';
import CustomDatePicker from '@/components/common/customDatePicker/customDatePicker';

const PersonalInfo = ({ register, controller, control }) => {
  function dataSelectField(data) {
    return [
      {
        title: 'مرد',
        value: 'man',
      },
      {
        title: 'زن',
        value: 'women',
      },
      {
        title: 'ترجیه میدهم نگویم',
        value: 'nogender',
      },
    ];
  }

  return (
    <div className={s.personalInfo}>
      <Input
        modifier={`${s.personalInfo_input}`}
        {...register('name')}
        type={'text'}
        register={register}
        label="نام"
        placeholder={'نام خود را وارد کنید.'}
        autoComplete="one-time-code"
        required
      />
      <Input
        modifier={`${s.personalInfo_input}`}
        {...register('family')}
        type={'text'}
        register={register}
        label="نام خانوادگی"
        placeholder={'نام خانوادگی خود را وارد کنید.'}
        autoComplete="one-time-code"
        required
      />
      <div className={s.personalInfo_selectWapper}>
        <CustomDatePicker
          className={s.personalInfo_datePicker}
          label="تاریخ تولد"
          FormController={controller}
          formControl={control}
        />
        <SelectField
          name={'gender'}
          label="جنسیت"
          options={dataSelectField()}
          className={s.personalInfo_select}
          placeholder="جنسیت خود را انتخاب کنید."
          FormController={controller}
          formControl={control}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
