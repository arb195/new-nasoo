// import Skeleton from '@mui/material/Skeleton';
import Skeleton from '@/components/common/skeleton/skeleton';
import s from './inputSkeleton.module.scss';

const InputSkeleton = () => {
  return (
    <>
      <div className={s.inputSkeleton_content}>
        <Skeleton width={'100%'} height={50} />
      </div>
    </>
  );
};

export default InputSkeleton;
