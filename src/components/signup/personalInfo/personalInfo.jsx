'use client';

import s from './personalInfo.module.scss';
import Input from '@/root/src/components/common/input/input';
import SelectField from '@/components/common/input/select';
import CustomDatePicker from '@/components/common/customDatePicker/customDatePicker';
import { isCharEn } from '@/hook/isCharEn';
import SweetAlert2 from 'react-sweetalert2';
import { useState } from 'react';

const PersonalInfo = ({ register, controller, control }) => {
  const sexOptions = [
    {
      title: 'مرد',
      value: 'man',
    },
    {
      title: 'زن',
      value: 'women',
    },
  ];

  const [swalProps, setSwalProps] = useState({});

  function handleClick(title, text) {
    setSwalProps({
      show: true,
      icon: 'error',
      title: title,
      text: text,
      confirmButtonText: 'متوجه شدم',
    });
  }

  return (
    <div className={s.personalInfo}>
      <SweetAlert2
        {...swalProps}
        didClose={() => {
          setSwalProps({});
        }}
      />
      <Input
        modifier={`${s.personalInfo_input}`}
        {...register('name')}
        type={'text'}
        register={register}
        label="نام"
        placeholder={'نام خود را وارد کنید.'}
        autoComplete="one-time-code"
        required
        onKeyUpFunc={(e) => {
          if (isCharEn(e)) {
            handleClick('خطا', 'لطفا نام خود را فارسی وارد کنید ');
            e.target.value = '';
          }
        }}
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
        onKeyUpFunc={(e) => {
          if (isCharEn(e)) {
            handleClick('خطا', 'لطفا نام خانوادگی خود را فارسی وارد کنید ');
            e.target.value = '';
          }
        }}
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
          label="جنس"
          options={sexOptions}
          className={s.personalInfo_select}
          placeholder="جنس خود را انتخاب کنید."
          FormController={controller}
          formControl={control}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
