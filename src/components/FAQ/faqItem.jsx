import React from 'react';
import Logo from '@/root/src/components/header/logo/logo';
import style from './faq.module.scss';

const FaqItem = (item) => {
  return (
    <div className={style.faqItem}>
      <div className={style.faqItem_question}>
        {/* avatar and username */}
        <p>{item.question}</p>
      </div>
      <div className={style.faqItem_answer}>
        <Logo />
        <p>{item.answer}</p>
      </div>
    </div>
  );
};
export default FaqItem;
