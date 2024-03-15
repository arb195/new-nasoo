import s from './dashboard.module.scss';
import Link from 'next/link';
// import ProfileBox from '../profileBox/profileBox';
// Icon
import Icon from '@/components/common/icon/icon';

const Dashboard = () => {
  return (
    <div className={s.dashboard}>
      <div className={s.dashboard_quickAccess}>
        <div className={s.dashboard_quickAccessItem}>
          <Link href="/my-account/order" title="سفارشات">
            <span className={s.dashboard_quickAccessTitle}>
              <Icon src="article" width={22} height={20} />
              سفارشات
            </span>
            <span className={s.dashboard_quickAccessShow}>مشاهده سفارشات</span>
          </Link>
        </div>
        <div className={s.dashboard_quickAccessItem}>
          <Link href="/my-account/faq" title="سوالات">
            <span className={s.dashboard_quickAccessTitle}>
              <Icon src="ticket" width={22} height={20} />
              سوالات
            </span>
            <span className={s.dashboard_quickAccessShow}>مشاهده سوالات</span>
          </Link>
        </div>
        <div className={s.dashboard_quickAccessItem}>
          <Link
            prefetch={false}
            href="/my-account/my-products"
            title="محصولات ذخیره شده"
          >
            <span className={s.dashboard_quickAccessTitle}>
              <Icon src="qiubic" width={22} height={20} />
              محصولات ذخیره شده
            </span>
            <span className={s.dashboard_quickAccessShow}>مشاهده محصولات</span>
          </Link>
        </div>
      </div>
      <div className={s.dashboard_quickAccess}></div>
    </div>
  );
};

export default Dashboard;
