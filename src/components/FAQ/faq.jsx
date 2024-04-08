'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import FaqItem from './faqItem';
import style from './faq.module.scss';
import Icon from '../common/icon/icon';
import Btn from '../common/btn/btn';
import Input from '../common/input/input';
import Link from 'next/link';
const questions = [{ question: 'q01', answer: 'a01' }];
const FAQ = () => {
  const { register, handleSubmit } = useForm();
  //   const handleSubmit = {};
  return (
    <div className={style.faq}>
      <div className={style.faq_title}>
        <Icon width="20" height="20" src={'Q&A'} />
        <p>پرسش و پاسخ</p>
      </div>
      <div className={style.faq_body}>
        {/* <FaqItem item={questions} /> */}
        <form onSubmit={handleSubmit} className={style.faq_body_newQuestion}>
          <p className={style.faq_body_newQuestion_headline}>سوال شما</p>
          <Input
            {...register('question')}
            type={'text'}
            textaria={true}
            register={register}
            placeholder={
              'سوالات خود را در ارتباط با این گردهمایی اینجا بنویسید.'
            }
          />
          <div className={style.faq_body_newQuestion_submiting}>
            <Btn
              type={'submit'}
              className={style.faq_body_newQuestion_submiting_btn}
            >
              ارسال
            </Btn>
            <Link
              href={'#'}
              className={style.faq_body_newQuestion_submiting_link}
            >
              بیشتر
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FAQ;
