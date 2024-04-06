'use client';

import s from './buyTime.module.scss';
import { NsContainer, NsRow, NsCol } from '@/components/common/grid/grid';
import BtnLink from '@/components/common/btn/btnLink/btnLink';
import { useForm } from 'react-hook-form';
import Input from '@/root/src/components/common/input/input';
import Btn from '@/components/common/btn/btn';
import ImageItem from '@/components/common/imageItem/imageItem';

const BuyTime = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSumbit = (model) => {
    return true;
  };
  return (
    <div className={s.buyTime}>
      <NsContainer >
        <NsRow container columnSpacing={3}>
          <NsCol item md={12}>
            <span className={s.buyTime_title}>افزایش مدت جلسه فردی</span>
            <form
              onSubmit={handleSubmit(onSumbit)}
              className={s.buyTime_formWrraper}
            >
              <ui className={s.buyTime_radioWrraper}>
                <li className={s.buyTime_radioItem}>
                  <input
                    {...register('hour')}
                    type={'radio'}
                    id={'2h'}
                    register={register}
                  />
                  <label htmlFor="2h" className={s.buyTime_radioLabel}>
                    <span>۲ ساعت</span>
                    <span>۱ میلیون تومان</span>
                  </label>
                </li>
                <li className={s.buyTime_radioItem}>
                  <input
                    {...register('hour')}
                    type={'radio'}
                    id={'4h'}
                    register={register}
                  />
                  <label htmlFor="4h" className={s.buyTime_radioLabel}>
                    <span>4 ساعت</span>
                    <span>۱ میلیون تومان</span>
                  </label>
                </li>
                <li className={s.buyTime_radioItem}>
                  <input
                    {...register('hour')}
                    type={'radio'}
                    id={'6h'}
                    register={register}
                  />
                  <label htmlFor="6h" className={s.buyTime_radioLabel}>
                    <span>6 ساعت</span>
                    <span>۱ میلیون تومان</span>
                  </label>
                </li>
                <li className={s.buyTime_radioItem}>
                  <input
                    {...register('hour')}
                    type={'radio'}
                    id={'8h'}
                    register={register}
                  />
                  <label htmlFor="8h" className={s.buyTime_radioLabel}>
                    <span>8 ساعت</span>
                    <span>۱ میلیون تومان</span>
                  </label>
                </li>
              </ui>
              <p className={s.buyTime_radiodesc}>
                *مدت هر جلسه محاسبه خواهد شد که ممکن است ۱۵ دقیقه تا ۱:۱۵ باشد
              </p>
              <div className={s.buyTime_btnWrapper}>
                <Btn className={s.buyTime_btn}>پرداخت</Btn>
                <BtnLink
                  className={s.buyTime_btn}
                  outline={true}
                  text="بازگشت"
                  link={'/personal-meet'}
                />
              </div>
            </form>
          </NsCol>
          <NsCol item md={12}>
            <ImageItem
              src={'/assets/img/buy-meet.png'}
              alt={'جلسه فردی'}
              width={636}
              height={447}
            />
          </NsCol>
        </NsRow>
      </NsContainer>
    </div>
  );
};

export default BuyTime;
