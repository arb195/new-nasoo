import Icon from '@/components/common/icon/icon';
import BtnLink from '@/components/common/btn/btnLink/btnLink';
import { NsContainer } from '@/components/common/grid/grid';
import s from './payInfo.module.scss';
const PayInfo = ({ status = 'success' }) => {
  return (
    <NsContainer >
      <div
        className={`${s.payInfo_wrapper} ${
          status === 'success' ? s.payInfo_succes : s.payInfo_error
        }`}
      >
        <Icon
          className={s.payInfo_icon}
          width={333}
          height={333}
          src={status === 'success' ? 'tick-border' : 'close-border'}
        />
        <h1 className={s.payInfo_title}>
          {status == 'success'
            ? 'عملیات پرداخت شما با موفقیت انجام شد.'
            : 'متاسفانه عملیات پرداخت شما ناموفق بود!'}
        </h1>
        <span className={s.payInfo_desc}>کد رهگیری سفارش شما: ۴۲۸۷۰۲</span>
        <BtnLink
          className={s.payInfo_btn}
          text="بازگشت به صفحه تکرار تراکنش"
          link={'/personal-meet'}
        />
        {status == 'error' && (
          <BtnLink
            className={s.payInfo_btnBack}
            outline={true}
            text="بازگشت به صفحه اصلی  "
            link={'/personal-meet'}
          />
        )}
      </div>
    </NsContainer>
  );
};

export default PayInfo;
