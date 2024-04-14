'use client';

import s from './personalMeetForm.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Input from '@/root/src/components/common/input/input';
import Btn from '@/components/common/btn/btn';
// import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2';
// import { useState } from 'react';

const PersonalMeetForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSumbit = (model) => {
    if (!model?.desc) {
      handleAlert(
        'توجه!',
        'شما ثبت درخواست را بدون توضیحات انجام می‌دهید',
        'info',
        true,
        true
      );
    }
    setTimeout(() => {
      handleAlert(
        'موفق',
        'درخواست شما با موفقیت ثبت شد.',
        'success',
        true,
        false,
        'فهمیدم'
      );
    }, 2000);
    return true;
  };
  // const [swalProps, setSwalProps] = useState({});
  // function handleAlert(
  //   title,
  //   text,
  //   type,
  //   showCloseButton = false,
  //   showCancelButton = false,
  //   confirmButtonText = 'ثبت درخواست',
  //   cancelButtonText = 'بازگشت'
  // ) {
  //   setSwalProps({
  //     show: true,
  //     showCloseButton: showCloseButton,
  //     showCancelButton: showCancelButton,
  //     icon: type,
  //     title: title,
  //     text: text,
  //     confirmButtonText: confirmButtonText,
  //     cancelButtonText: cancelButtonText,
  //   });
  // }

  const handleAlert = async (
    title,
    text,
    type,
    showCloseButton = false,
    showCancelButton = false,
    confirmButtonText = 'ثبت درخواست',
    cancelButtonText = 'بازگشت'
  ) => {
    const response = await Swal.fire({
      show: true,
      showCloseButton: showCloseButton,
      showCancelButton: showCancelButton,
      icon: type,
      title: title,
      text: text,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    });
  };

  return (
    <div className={s.meetForm}>
      {/* <SweetAlert2
        {...swalProps}
        didClose={() => {
          setSwalProps({});
        }}
      /> */}
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
              value={'onside'}
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
              value={'online'}
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
