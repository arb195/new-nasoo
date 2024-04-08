'use client';

import s from './generalInfoForm.module.scss';
import { NsContainer, NsRow, NsCol } from '@/components/common/grid/grid';
import { Controller, useForm } from 'react-hook-form';
import Input from '@/root/src/components/common/input/input';
import SelectField from '@/components/common/input/select';
import CustomDatePicker from '@/components/common/customDatePicker/customDatePicker';

const GeneralInfoForm = () => {
  const { register, handleSubmit, watch, control } = useForm();

  const onSumbit = (model) => {
    // router.push('/');
  };

  const countrySelectField = [
    {
      title: 'ایران',
      icon: {
        src: 'iran-flag',
        width: '24px',
        height: '24px',
      },
      value: '+98',
    },
    {
      title: 'آمریکا',
      icon: {
        src: 'iran-flag',
        width: '24px',
        height: '24px',
      },
      value: '+1',
    },
  ];

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
  return (
    <div className={s.form}>
      <NsContainer className={s.form_container}>
        <NsRow container spacing={3}>
          <NsCol item md={12} xss={24}>
            <form onSubmit={handleSubmit(onSumbit)}>
              <Input
                {...register('name', { value: 'محدثه' })}
                type={'text'}
                register={register}
                label="نام"
                placeholder={'نام خود را وارد کنید.'}
                autoComplete="one-time-code"
                required
              />
            </form>
          </NsCol>
          <NsCol item md={12} xss={24}>
            <form onSubmit={handleSubmit(onSumbit)}>
              <Input
                {...register('family', { value: 'ابراهیم' })}
                type={'text'}
                register={register}
                label="نام خانوادگی"
                placeholder={'نام خانوادگی خود را وارد کنید.'}
                autoComplete="one-time-code"
                required
              />
            </form>
          </NsCol>
          <NsCol item md={12} xss={24}>
            <form onSubmit={handleSubmit(onSumbit)}>
              <Input
                {...register('showname', { value: 'محدثه ابراهیم' })}
                type={'text'}
                register={register}
                label="نام نمایشی "
                placeholder={'نام نمایشی خود را وارد کنید.'}
                autoComplete="one-time-code"
                required
              />
            </form>
          </NsCol>
          <NsCol item md={24} xss={24}>
            <form onSubmit={handleSubmit(onSumbit)}>
              <div className={s.form_phone}>
                <Input
                  modifier={`${s.form_phoneInput}`}
                  {...register('ep', { pattern: /^[0-9]+$/g })}
                  type={'tel'}
                  register={register}
                  autoComplete="off"
                  maxLength="11"
                  pattern="[0-9۰-۹]*"
                  inputMode="numeric"
                  required
                  label="شماره تلفن همراه"
                  placeholder={'شماره تلفن همراه خود را وارد کنید.'}
                />
                <SelectField
                  name={'country-code'}
                  label="کد کشور"
                  required={true}
                  options={countrySelectField}
                  FormController={Controller}
                  formControl={control}
                  className={s.form_phoneSelect}
                />
              </div>
            </form>
          </NsCol>
          <NsCol item md={24} xss={24}>
            <form onSubmit={handleSubmit(onSumbit)}>
              <Input
                {...register('email', {
                  value: 'Mohadeseh.ebrahim1329@gmail.com',
                })}
                type={'email'}
                register={register}
                label="ایمیل"
                placeholder={'ایمیل خود را وارد کنید.'}
                autoComplete="one-time-code"
                required
              />
            </form>
          </NsCol>
          <NsCol item md={12} xss={24}>
            <form onSubmit={handleSubmit(onSumbit)}>
              <CustomDatePicker
                className={s.form_datePicker}
                label="تاریخ تولد"
                FormController={Controller}
                formControl={control}
              />
            </form>
          </NsCol>
          <NsCol item md={12} xss={24}>
            <form onSubmit={handleSubmit(onSumbit)}>
              <SelectField
                name={'gender'}
                label="جنس"
                required={true}
                options={sexOptions}
                className={s.form_select}
                placeholder="جنس خود را انتخاب کنید."
                FormController={Controller}
                formControl={control}
              />
            </form>
          </NsCol>
          <NsCol item md={24} xss={24}>
            <form onSubmit={handleSubmit(onSumbit)}>
              <Input
                modifier={`${s.changePass_input} ${s.changePass_mb16}`}
                {...register('pass')}
                type={'password'}
                register={register}
                label="رمز عبور"
                placeholder={'رمز عبور خود را وارد کنید.'}
                autoComplete="one-time-code"
                required
              />
              <Input
                modifier={`${s.changePass_input}`}
                {...register('trypass')}
                type={'password'}
                register={register}
                label="تکرار رمز عبور"
                placeholder={'تکرار رمز عبور خود را وارد کنید.'}
                autoComplete="one-time-code"
                required
              />
            </form>
          </NsCol>
        </NsRow>
      </NsContainer>
    </div>
  );
};

export default GeneralInfoForm;
