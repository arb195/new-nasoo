import s from './profileLayout.module.scss';
import { useContext } from 'react';
import AppContext from '@/context/appContext';
import { NsContainer } from '@/components/common/grid/grid';
import Link from 'next/link';
import ImageItem from '@/components/common/imageItem/imageItem';
import { useLogin } from '@/hook/useLogin';
// Icon
import Icon from '@/components/common/icon/icon';

const ProfileLayout = ({ children }) => {
  const appContext = useContext(AppContext);
  const [user] = appContext.user;
  const [logout] = useLogin();

  return (
    <NsContainer disableGutters={true} sx={{ marginBottom: '30px' }}>
      <div className={s.profileLayout}>
        <ul className={s.profileLayout_list}>
          <li className={s.profileLayout_user}>
            <div className={s.profileLayout_userImage}>
              <ImageItem
                src="/assets/img/avatar.svg"
                alt="تصویر کاربر"
                width={48}
                height={48}
              />
            </div>
            <div className={s.profileLayout_userInfo}>{user.nicename}</div>
          </li>
          <li>
            <Link href="/my-account/">
              <span>
                <Icon src="tile" width={18} height={18} />
                داشبورد
              </span>
            </Link>
          </li>
          <li>
            <Link href="/my-account/order">
              <span>
                <Icon src="article" width={18} height={18} />
                لیست سفارشات
              </span>
            </Link>
          </li>
          <li>
            <Link href="/my-account/products">
              <span>
                <Icon src="qiubic" width={18} height={18} />
                محصولات ذخیره شده
              </span>
            </Link>
          </li>
          <li>
            <Link href="/my-account/posts">
              <span>
                <Icon src="order-list" width={18} height={18} />
                مقالات ذخیره شده
              </span>
            </Link>
          </li>
          <li>
            <Link href="/my-account/podcasts">
              <span>
                <Icon src="supp" width={18} height={18} />
                پادکست های ذخیره شده
              </span>
            </Link>
          </li>
          <li>
            <Link href="/my-account/videos">
              <span>
                <Icon src="circle-play" width={18} height={18} />
                ویدیو های ذخیره شده
              </span>
            </Link>
          </li>
          <li>
            <Link href="/my-account/transactions">
              <span>
                <Icon src="factors" width={18} height={18} />
                تراکنش ها
              </span>
            </Link>
          </li>
          <li>
            <Link href="/my-account/faq">
              <span>
                <Icon src="ticket" width={18} height={18} />
                پرسش های من
              </span>
            </Link>
          </li>
          <li>
            <Link href="/my-account/comments">
              <span>
                <Icon src="ticket" width={18} height={18} />
                نظرات من
              </span>
            </Link>
          </li>
          <li>
            <Link href="/my-account/aichat">
              <span>
                <Icon src="supp" width={18} height={18} />
                چت با هوش مصنوعی
              </span>
            </Link>
          </li>
          <li>
            <Link href="/my-account/edit">
              <span>
                <Icon src="setting" width={18} height={18} />
                تنظیمات
              </span>
            </Link>
          </li>
          <li
            onClick={() => {
              logout();
            }}
          >
            <span>
              <Icon src="power" width={18} height={18} />
              خروج
            </span>
          </li>
        </ul>
        {children}
      </div>
    </NsContainer>
  );
};

export default ProfileLayout;
