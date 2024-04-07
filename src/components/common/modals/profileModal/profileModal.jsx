import s from './profileModal.module.scss';
import Slider from '@/components/common/slider/slider';
import ImageItem from '@/components/common/imageItem/imageItem';
import dataSlider from './dataSlider.json';
import { useForm } from 'react-hook-form';
import UploadInput from '@/root/src/components/common/input/uploadInput';
import Btn from '@/components/common/btn/btn';

const ProfileModal = ({ title, data }) => {
  const { register, handleSubmit, watch } = useForm();

  const config = {
    spaceBetween: 10,
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      0: {
        spaceBetween: 10,
        slidesPerView: 1.2,
      },
      400: {
        spaceBetween: 10,
        slidesPerView: 1.5,
      },
      480: {
        spaceBetween: 10,
        slidesPerView: 1.5,
      },
      576: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 10,
        slidesPerView: 3.2,
      },
      992: {
        spaceBetween: 7,
        slidesPerView: 4.5,
      },
      1200: {
        spaceBetween: 10,
        slidesPerView: 5,
      },
    },
  };

  const onSumbit = (model) => {
    return true;
  };

  const slidesGenerate = (dataSlide) => {
    return dataSlide?.map((item, index) => {
      return (
        <div>
          <ImageItem
            className={s.profileModal_sliderImg}
            src={item?.img?.url}
            alt={item?.img?.alt}
            width={item?.img?.width}
            height={item?.img?.height}
          />
        </div>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(onSumbit)} className={s.profileModal}>
      <div>
        <span className={s.profileModal_title}>{title}</span>
        <Slider
          className={s.profileModal_slider}
          data={slidesGenerate(data)}
          isPagination
          config={config}
        ></Slider>
      </div>
      <div className={s.profileModal_uploader}>
        <span className={s.profileModal_title}>
          انتخاب عکس مورد نظر از دستگاه‌تان
        </span>
        <div>
          <UploadInput
            name="uploaer-banner"
            type={'file'}
            id={'banner'}
            register={register}
          />
        </div>
        <Btn type="sumbit" className={s.profileModal_btn}>
          ذخیره
        </Btn>
      </div>
    </form>
  );
};

export default ProfileModal;
