import s from './skeletonLoading.module.scss';
import Skeleton from '@/components/common/skeleton/skeleton';

const SkeletonLoading = () => {
  return (
    <div className={s.skeletonLoad}>
      <div className={s.skeletonLoad_box}>
        <Skeleton width={20} height={180} />
        <Skeleton width={20} height={270} />
        <Skeleton width={20} height={150} />
        <Skeleton width={20} height={80} />
        <Skeleton width={20} height={110} />
        <Skeleton width={20} height={140} />
        <Skeleton width={20} height={170} />
        <Skeleton width={20} height={200} />
        <Skeleton width={20} height={120} />
        <Skeleton width={20} height={70} />
      </div>
      <div className={s.skeletonLoad_text}>در حال بارگیری...</div>
    </div>
  );
};

export default SkeletonLoading;
