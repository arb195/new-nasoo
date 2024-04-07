import s from './uploadInput.module.scss';
import Input from '@/root/src/components/common/input/input';
import Icon from '@/components/common/icon/icon';
import Btn from '@/components/common/btn/btn';

const UploadInput = ({ register, name, id }) => {
  return (
    <div className={s.upload}>
      <label htmlFor={id} className={s.upload_label}>
        <Icon className={s.upload_icon} width="20" height="20" src={'upload'} />
        <span className={s.upload_text}>
          برای اضافه کردن فایل، تصویر را بکشید و رها کنید
        </span>
        <Btn className={s.upload_btn}>افزودن عکس</Btn>
      </label>
      <Input
        {...register(name)}
        type={'file'}
        id={id}
        register={register}
        required
      />
    </div>
  );
};

export default UploadInput;
