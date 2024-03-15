'use client';

import s from './personalMeetForm.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Input from '@/root/src/components/common/input/input';
import Btn from '@/components/common/btn/btn';

const PersonalMeetForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSumbit = (model) => {
    return true;
  };
  return (
    <div className={s.meetForm}>
      <div className={s.meetForm_head}>
        <span className={s.meetForm_headTitle}>ثبت درخواست جلسه‌ی فردی</span>
        <Link className={s.meetForm_headLink} prefetch={false} href={'#'}>
          در مورد جلسه فردی <b>بیشتر بدانید</b> .
        </Link>
      </div>
      <form
        onSubmit={handleSubmit(onSumbit)}
        className={s.meetForm_formWrraper}
      >
        <ul className={s.meetForm_radioWrraper}>
          <li className={s.meetForm_radioItem}>
            <Input
              modifier={`${s.meetForm_radioInput}`}
              {...register('meet-type')}
              type={'radio'}
              id={'in-person'}
              register={register}
              required
            />
            <label htmlFor="in-person">حضوری</label>
          </li>
          <li className={s.meetForm_radioItem}>
            <Input
              modifier={`${s.meetForm_radioInput}`}
              {...register('meet-type')}
              type={'radio'}
              id={'online'}
              register={register}
              required
            />
            <label htmlFor="online">آنلاین</label>
          </li>
        </ul>
        <div className={s.meetForm_form}>
          <span className={s.meetForm_formTitle}>توضیحات</span>
          <textarea
            {...register('desc')}
            className={s.meetForm_formTxt}
            placeholder="اگر محدودیتی برای روز و ساعت جلسه دارید، برای ما بنویسید."
          ></textarea>
        </div>
        <Btn className={s.meetForm_btnSubmit}>ثبت درخواست</Btn>
      </form>
    </div>
  );
};

export default PersonalMeetForm;
