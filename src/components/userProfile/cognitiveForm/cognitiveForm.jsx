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
import dataSelectInput from './selectInputData.json';
import { countries } from '@/constants/allcountries';

const CognitiveForm = () => {
  const { register, handleSubmit, watch, control } = useForm();

  const onSumbit = (model) => {
    // console.log(model);
    // router.push('/');
  };

  function dataSelectField(data) {
    return data.map((item) => {
      return {
        title: item?.ConNameFa,
        value: item?.ConCode,
      };
    });
  }

  return (
    <div className={s.cognitiveForm}>
      <NsContainer className={s.cognitiveForm_container}>
        <CustomAccordion title="فرم شناختی درمانگر" grow={20}>
          <div className={s.cognitiveForm_contentWrraper}>
            <span className={s.cognitiveForm_alertTxt}>
              <Icon
                width="21"
                height="21"
                src={'alert-border'}
                className={s.cognitiveForm_alertTxt__icon}
              />
              اطلاعات تکمیلی پروفایل شما محرمانه خواهد بود و فقط برای
              روان‌درمانگر شما قابل نمایش است.
            </span>
            <form onSubmit={handleSubmit(onSumbit)}>
              <NsRow container spacing={3}>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'marital-status'}
                    label="وضعیت تأهل"
                    options={dataSelectInput.marital_status}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'children-count'}
                    label="چند فرزند دارید؟"
                    options={dataSelectInput.count}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'born-country'}
                    label="در کدام کشور متولد شده‌اید؟"
                    options={dataSelectField(countries)}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'born-city'}
                    label="در کدام شهر متولد شده‌اید؟"
                    options={dataSelectField(countries)}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'live-country'}
                    label="اکنون در کدام کشور زندگی می‌کنید؟"
                    options={dataSelectField(countries)}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'live-country'}
                    label="اکنون در کدام شهر زندگی می‌کنید؟"
                    options={dataSelectField(countries)}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'children-family'}
                    label="فرزند چندم خانواده هستید؟"
                    options={dataSelectInput.count}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'degree'}
                    label="مدرک تحصیلی شما چیست؟"
                    options={dataSelectInput.degree_education}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <Input
                    {...register('personal-website')}
                    type={'text'}
                    register={register}
                    label="آدرس سایت شخصی"
                    placeholder={'آدرس سایت شخصی خود را وارد کنید.'}
                    autoComplete="one-time-code"
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <Input
                    {...register('personal-insta')}
                    type={'text'}
                    register={register}
                    label="آدرس اینستاگرام"
                    placeholder={'آدرس اینستاگرام خود را وارد کنید..'}
                    autoComplete="one-time-code"
                    required={false}
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('field-study')}
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
                <NsCol item xss={24}>
                  <Input
                    {...register('skill-field')}
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
                <NsCol item xss={24}>
                  <Input
                    {...register('job')}
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
                <NsCol item xss={24}>
                  <Input
                    {...register('layoff-date')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="اگر فعلا شاغل نیستید، حدودا از چه تاریخی مشغول به کار نبوده‌اید."
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('life-achieve')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="دو مورد از مهمترین دستاوردهای زندگی‌تان را بنوسید."
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('bad-happening')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="دو مورد از سخت‌ترین اتفاق‌هایی که تاکنون آن را تجربه و از سر گذرانده‌اید بنویسید."
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <CustomSortableList
                    title={
                      <span>
                        وقتی صحبت از بهبود و اصلاح ساختار ذهن می‌شود، مهم‌ترین
                        اولویت شما چیست؟{' '}
                        <span>(گزینه‌ها را براساس اولویت مرتب کنید.)</span>
                      </span>
                    }
                    data={dataSelectInput.ordersOfMind}
                    name={'ordersOfMind'}
                    register={register}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('importance-and-priority')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="در ادامه سوال قبلی (اولویت شما در مسیر رشد شخصیتی) آیا موضوع دیگری هم برای شما اهمیت و اولویت دارد؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('improve-mind')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="وقتی صحبت از بهبود و اصلاح ساختار ذهن می‌شود، مهم‌ترین ترس شما چیست؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('mental-states')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="حالات روحی، خلقی و هیجانی خود را چگونه توصیف می‌کنید؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('self-correction')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="می‌خواهید چه چیزهایی را در خود مورد اصطلاح یا تغییر قرار دهید؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('calm-yourself-down')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="برای آرام کردن خود چه کاری انجام می‌دهید؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('favorite-hobby')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="تفریحات مورد علاقه شما چیست؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Radio
                    id="before-nasoo1"
                    label="آیا قبل از ثبت نام در مدرسه ناسو برای بهبود و اصلاح ساختار ذهن خود، نقشه‌ی راه و برنامه‌ی مشخصی داشته‌اید؟"
                    htmllabel="بله"
                    register={register}
                    name="before-nasoo"
                  />
                  <Radio
                    id="before-nasoo2"
                    htmllabel="خیر"
                    register={register}
                    name="before-nasoo"
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('hour-recovery')}
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
                <NsCol item xss={24}>
                  <Input
                    {...register('biggest-obstacle')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="به نظر خودتان بزرگترین مانع و چالش فعلی شما برای بهبود و اصلاح ساختار ذهن خود چیست؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('reasons-selection')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="اصلی‌ترین دلایل شما برای انتخاب مدرسه ناسو چه بوده‌اند؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'know-school'}
                    label="چگونه با مدرسه آشنا شده‌اید؟"
                    options={dataSelectInput.introduction}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'in-webinar'}
                    label="آیا در وبینار «آشنایی با مدرسه» شرکت کرده‌اید؟"
                    options={dataSelectInput.yes_no}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Radio
                    id="school-introduction9"
                    label="آیا قبل از ثبت‌نام، فیلم معرفی مدرسه را دیدید؟ (فیلمی که در
                      صفحه اول سایت قرار داده‌ایم)"
                    htmllabel="بله"
                    register={register}
                    name="school-introduction"
                  />
                  <Radio
                    id="school-introduction10"
                    htmllabel="خیر"
                    register={register}
                    name="school-introduction"
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Radio
                    id="physical-illness7"
                    label="آیا بیماری جسمی خاصی دارید؟"
                    htmllabel="بله"
                    register={register}
                    name="physical-illness"
                  />
                  <Radio
                    id="physical-illness8"
                    htmllabel="خیر"
                    register={register}
                    name="physical-illness"
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Radio
                    id="psychologist-diagnosis6"
                    label="آیا قبلا توسط روان‌شناس یا روان‌پزشک، تشخیص خاصی گرفته‌اید؟"
                    htmllabel="بله"
                    register={register}
                    name="psychologist-diagnosis"
                  />
                  <Radio
                    id="psychologist-diagnosis5"
                    htmllabel="خیر"
                    register={register}
                    name="psychologist-diagnosis"
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Radio
                    id="drug-psychiatrist3"
                    label="آیا قبلا توسط روان‌شناس یا روان‌پزشک، دارویی برای شما تجویز
                    شده است؟"
                    htmllabel="بله"
                    register={register}
                    name="drug-psychiatrist"
                  />
                  <Radio
                    id="drug-psychiatrist4"
                    htmllabel="خیر"
                    register={register}
                    name="drug-psychiatrist"
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('changes-in-3-years')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="دوست دارید تا ۳ سال دیگر چه تغییراتی در زندگی شما به وجود آمده باشد؟"
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('job-in-3-years')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="دوست دارید تا ۳ سال دیگر در چه شغلی مشغول به کار باشید؟ آن را توصیف کنید."
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('user-note')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="هر صحبت دیگری دارید، برایمان بنویسید."
                    autoComplete="one-time-code"
                    required
                  />
                </NsCol>
              </NsRow>
              <div className={s.cognitiveForm_btn}>
                <Btn type={'submit'}>ذخیره اطلاعات</Btn>
              </div>
            </form>
          </div>
        </CustomAccordion>
      </NsContainer>
    </div>
  );
};

export default CognitiveForm;
