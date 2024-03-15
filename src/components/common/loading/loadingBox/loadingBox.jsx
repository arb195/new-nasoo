import s from './loadingBox.module.scss';
import Logo from '@/root/src/components/header/logo/logo';
import Loading from '../loading';

const LoadingBox = () => {
  return (
    <div className={s.loadingBox}>
      <div className={s.loadingBox_wrapper}>
        <Logo />
        <Loading modifier="load__overlay" />
      </div>
    </div>
  );
};

export default LoadingBox;
