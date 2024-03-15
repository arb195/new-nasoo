'use client';

import s from './cognitiveForm.module.scss';

import { NsContainer, NsRow, NsCol } from '@/components/common/grid/grid';
import { Controller, useForm } from 'react-hook-form';
import CustomAccordion from '@/components/common/customAccordion/customAccordion';
import Icon from '@/components/common/icon/icon';
import Input from '@/root/src/components/common/input/input';
import Radio from '@/root/src/components/common/input/radio';
import SelectField from '@/components/common/input/select';
import Btn from '@/components/common/btn/btn';
import CustomSortableList from '@/components/common/customSortableList/customSortableList';

const CognitiveForm = () => {
  const { register, handleSubmit, watch, control } = useForm();

  const onSumbit = (model) => {
    // router.push('/');
  };

  function dataSelectField(data) {
    return [
      {
        title: 'ایران',
        icon: {
          src: 'iran-flag',
          width: '24px',
          height: '24px',
        },
        value: '+98',
      },
      {
        title: 'آمریکا',
        icon: {
          src: 'iran-flag',
          width: '24px',
          height: '24px',
        },
        value: '+1',
      },
    ];
  }
  return (
    <div className={s.cognitiveForm}>
      <NsContainer className={s.cognitiveForm_container} disableGutters={true}>
        <CustomAccordion title="فرم شناختی درمانگر">
          <div className={s.cognitiveForm_contentWrraper}>
            <span className={s.cognitiveForm_alertTxt}>
              <Icon width="21" height="21" src={'alert-border'} />
              اطلاعات تکمیلی پروفایل شما محرمانه خواهد بود و فقط برای
              روان‌درمانگر شما قابل نمایش است.
            </span>
            <form onSubmit={handleSubmit(onSumbit)}>
              <NsRow container spacing={3}>
                <NsCol item md={12} xs={24}>
                  <SelectField
                    name={'country-code'}
                    label="وضعیت تأهل"
                    options={dataSelectField()}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xs={24}>
                  <SelectField
                    name={'country-code'}
                    label="چند فرزند دارید؟"
                    options={dataSelectField()}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xs={24}>
                  <SelectField
                    name={'country-code'}
                    label="در کدام کشور متولد شده‌اید؟"
                    options={dataSelectField()}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xs={24}>
                  <SelectField
                    name={'country-code'}
                    label="در کدام شهر متولد شده‌اید؟"
                    options={dataSelectField()}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xs={24}>
                  <SelectField
                    name={'country-code'}
                    label="اکنون در کدام کشور زندگی می‌کنید؟"
                    options={dataSelectField()}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xs={24}>
                  <SelectField
                    name={'country-code'}
                    label="اکنون در کدام شهر زندگی می‌کنید؟"
                    options={dataSelectField()}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xs={24}>
                  <SelectField
                    name={'country-code'}
                    label="فرزند چندم خانواده هستید؟"
                    options={dataSelectField()}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xs={24}>
                  <SelectField
                    name={'country-code'}
                    label="مدرک تحصیلی شما چیست؟"
                    options={dataSelectField()}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xs={24}>
                  <SelectField
                    name={'country-code'}
                    label={<span>آدرس سایت شخصی (اجباری نیست)</span>}
                    options={dataSelectField()}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xs={24}>
                  <SelectField
                    name={'country-code'}
                    label={<span>آدرس اینستاگرام (اجباری نیست)</span>}
                    options={dataSelectField()}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="در چه رشته‌ای تحصیل کرده‌اید؟ "
                    placeholder={
                      'اگر در چند رشته تحصیل کرده‌اید، برای ما بنویسید.'
                    }
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="در چه زمینه‌هایی مهارت دارید؟"
                    placeholder={
                      'اگر در چند زمینه مهارت دارید، برای ما بنویسید.'
                    }
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="در چه شغلی مشغول به کار هستید؟"
                    placeholder={
                      'اگر تا به حال چند شغل مختلف داشته‌اید، ترجیحا به ترتیب و از آخرین شغل به اولین شغل بنویسید.'
                    }
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="اگر فعلا شاغل نیستید، حدودا از چه تاریخی مشغول به کار نبوده‌اید."
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="دو مورد از مهمترین دستاوردهای زندگی‌تان را بنوسید."
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="دو مورد از سخت‌ترین اتفاق‌هایی که تاکنون آن را تجربه و از سر گذرانده‌اید بنویسید."
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <CustomSortableList
                    title={
                      <span>
                        وقتی صحبت از بهبود و اصلاح ساختار ذهن می‌شود، مهم‌ترین
                        اولویت شما چیست؟{' '}
                        <span>(گزینه‌ها را براساس اولویت مرتب کنید.)</span>
                      </span>
                    }
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="در ادامه سوال قبلی (اولویت شما در مسیر رشد شخصیتی) آیا موضوع دیگری هم برای شما اهمیت و اولویت دارد؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="وقتی صحبت از بهبود و اصلاح ساختار ذهن می‌شود، مهم‌ترین ترس شما چیست؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="حالات روحی، خلقی و هیجانی خود را چگونه توصیف می‌کنید؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="می‌خواهید چه چیزهایی را در خود مورد اصطلاح یا تغییر قرار دهید؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="برای آرام کردن خود چه کاری انجام می‌دهید؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="تفریحات مورد علاقه شما چیست؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Radio
                    id="s1"
                    label="آیا قبل از ثبت نام در مدرسه ناسو برای بهبود و اصلاح ساختار ذهن خود، نقشه‌ی راه و برنامه‌ی مشخصی داشته‌اید؟"
                    htmllabel="بله"
                    register={register}
                    name="s1"
                  />
                  <Radio
                    id="s2"
                    htmllabel="خیر"
                    register={register}
                    name="s1"
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('rangeA')}
                    type={'range'}
                    register={register}
                    className={s.cognitiveForm_range}
                    label="تا قبل از ثبت نام در مدرسه ناسو، هفته‌ای چند ساعت را برای
                    بهبود و اصلاح ساختار ذهن خود اختصاص می‌دادید؟"
                    required
                    min="0"
                    max="50"
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="به نظر خودتان بزرگترین مانع و چالش فعلی شما برای بهبود و اصلاح ساختار ذهن خود چیست؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="اصلی‌ترین دلایل شما برای انتخاب مدرسه ناسو چه بوده‌اند؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item md={12} xs={24}>
                  <SelectField
                    name={'country-code'}
                    label="چگونه با مدرسه آشنا شده‌اید؟"
                    options={dataSelectField()}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xs={24}>
                  <SelectField
                    name={'country-code'}
                    label="آیا در وبینار «آشنایی با مدرسه» شرکت کرده‌اید؟"
                    options={dataSelectField()}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Radio
                    id="s9"
                    label="آیا قبل از ثبت‌نام، فیلم معرفی مدرسه را دیدید؟ (فیلمی که در
                      صفحه اول سایت قرار داده‌ایم)"
                    htmllabel="بله"
                    register={register}
                    name="s2"
                  />
                  <Radio
                    id="s10"
                    htmllabel="خیر"
                    register={register}
                    name="s2"
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Radio
                    id="s7"
                    label="آیا بیماری جسمی خاصی دارید؟"
                    htmllabel="بله"
                    register={register}
                    name="s2"
                  />
                  <Radio
                    id="s8"
                    htmllabel="خیر"
                    register={register}
                    name="s2"
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Radio
                    id="s6"
                    label="آیا قبلا توسط روان‌شناس یا روان‌پزشک، تشخیص خاصی گرفته‌اید؟"
                    htmllabel="بله"
                    register={register}
                    name="s2"
                  />
                  <Radio
                    id="s5"
                    htmllabel="خیر"
                    register={register}
                    name="s2"
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Radio
                    id="s3"
                    label="آیا قبلا توسط روان‌شناس یا روان‌پزشک، دارویی برای شما تجویز
                    شده است؟"
                    htmllabel="بله"
                    register={register}
                    name="s2"
                  />
                  <Radio
                    id="s4"
                    htmllabel="خیر"
                    register={register}
                    name="s2"
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="دوست دارید تا ۳ سال دیگر چه تغییراتی در زندگی شما به وجود آمده باشد؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="دوست دارید تا ۳ سال دیگر در چه شغلی مشغول به کار باشید؟ آن را توصیف کنید."
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xs={24}>
                  <Input
                    {...register('showname')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="هر صحبت دیگری دارید، برایمان بنویسید."
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
              </NsRow>
              <Btn type={'submit'}>ذخیره اطلاعات</Btn>
            </form>
          </div>
        </CustomAccordion>
      </NsContainer>
    </div>
  );
};

export default CognitiveForm;
