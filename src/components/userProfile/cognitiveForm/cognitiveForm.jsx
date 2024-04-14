'use client';

import s from './cognitiveForm.module.scss';
import { useEffect, useState } from 'react';
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
import { allProvs } from '@/api/general';

const CognitiveForm = () => {
  const { register, handleSubmit, watch, control } = useForm();
  const [bornCity, setBornCity] = useState([]);
  const [liveCity, setLiveCity] = useState([]);
  const onSumbit = (model) => {
    console.log(model);
    // router.push('/');
  };

  function dataSelectField(data) {
    return data.map((item) => {
      return {
        title: item?.ConNameFa,
        value: item?.Id,
      };
    });
  }

  function dataCitySelectField(data) {
    return data.map((item) => {
      return {
        title: item?.PrvName,
        value: item?.Id,
      };
    });
  }

  let bornCountry = watch('born_country');
  let liveCountry = watch('live_country');

  useEffect(() => {
    if (bornCountry) {
      allProvs(bornCountry)
        .then(({ data }) => {
          setBornCity(dataCitySelectField(data?.Data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [bornCountry]);

  useEffect(() => {
    if (liveCountry) {
      allProvs(liveCountry)
        .then(({ data }) => {
          setLiveCity(dataCitySelectField(data?.Data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [liveCountry]);

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
                    name={'marital_status'}
                    label="وضعیت تأهل"
                    options={dataSelectInput.marital_status}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'children_count'}
                    label="چند فرزند دارید؟"
                    options={dataSelectInput.count}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'born_country'}
                    label="در کدام کشور متولد شده‌اید؟"
                    options={dataSelectField(countries)}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  {watch('born_country') === 1 ? (
                    <SelectField
                      name={'born_city'}
                      label="در کدام شهر متولد شده‌اید؟"
                      options={bornCity}
                      FormController={Controller}
                      formControl={control}
                      className={
                        bornCity == [] ? s.ognitiveForm_loadingSelect : ''
                      }
                    />
                  ) : (
                    <Input
                      {...register('born_city')}
                      type={'text'}
                      register={register}
                      label="در کدام شهر متولد شده‌اید؟"
                      placeholder={'نام شهر خود را وارد کنید'}
                    />
                  )}
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'live_country'}
                    label="اکنون در کدام کشور زندگی می‌کنید؟"
                    options={dataSelectField(countries)}
                    FormController={Controller}
                    formControl={control}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  {watch('live_country') === 1 ? (
                    <SelectField
                      name={'live_city'}
                      label="اکنون در کدام شهر زندگی می‌کنید؟"
                      options={liveCity}
                      FormController={Controller}
                      formControl={control}
                    />
                  ) : (
                    <Input
                      {...register('live_city')}
                      type={'text'}
                      register={register}
                      label="در کدام شهر متولد شده‌اید؟"
                      placeholder={'نام شهر خود را وارد کنید'}
                    />
                  )}
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'children_family'}
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
                    {...register('personal_website')}
                    type={'text'}
                    register={register}
                    label="آدرس سایت شخصی"
                    placeholder={'آدرس سایت شخصی خود را وارد کنید.'}
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <Input
                    {...register('personal_insta')}
                    type={'text'}
                    register={register}
                    label="آدرس اینستاگرام"
                    placeholder={'آدرس اینستاگرام خود را وارد کنید..'}
                    required={false}
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('field_study')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="در چه رشته‌ای تحصیل کرده‌اید؟ "
                    placeholder={
                      'اگر در چند رشته تحصیل کرده‌اید، برای ما بنویسید.'
                    }
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('skill_field')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="در چه زمینه‌هایی مهارت دارید؟"
                    placeholder={
                      'اگر در چند زمینه مهارت دارید، برای ما بنویسید.'
                    }
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
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('layoff_date')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="اگر فعلا شاغل نیستید، حدودا از چه تاریخی مشغول به کار نبوده‌اید."
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('life_achieve')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="دو مورد از مهمترین دستاوردهای زندگی‌تان را بنوسید."
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('bad_happening')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="دو مورد از سخت‌ترین اتفاق‌هایی که تاکنون آن را تجربه و از سر گذرانده‌اید بنویسید."
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
                    {...register('importance_and_priority')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="در ادامه سوال قبلی (اولویت شما در مسیر رشد شخصیتی) آیا موضوع دیگری هم برای شما اهمیت و اولویت دارد؟"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('improve_mind')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="وقتی صحبت از بهبود و اصلاح ساختار ذهن می‌شود، مهم‌ترین ترس شما چیست؟"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('mental_states')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="حالات روحی، خلقی و هیجانی خود را چگونه توصیف می‌کنید؟"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('self_correction')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="می‌خواهید چه چیزهایی را در خود مورد اصطلاح یا تغییر قرار دهید؟"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('calm_yourself_down')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="برای آرام کردن خود چه کاری انجام می‌دهید؟"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('favorite_hobby')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="تفریحات مورد علاقه شما چیست؟"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Radio
                    id="before_nasoo1"
                    label="آیا قبل از ثبت نام در مدرسه ناسو برای بهبود و اصلاح ساختار ذهن خود، نقشه‌ی راه و برنامه‌ی مشخصی داشته‌اید؟"
                    htmllabel="بله"
                    val="yes"
                    register={register}
                    name="before_nasoo"
                  />

                  {watch('before_nasoo') == 'yes' && (
                    <Input
                      {...register('plan_for_change')}
                      type={'text'}
                      register={register}
                      label=" نقشه راه و برنامه شما برای تغییر ساختار ذهنی‌تان چه بود؟"
                      required
                    />
                  )}
                  <Radio
                    id="before_nasoo2"
                    htmllabel="خیر"
                    val="no"
                    register={register}
                    name="before_nasoo"
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('hour_recovery')}
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
                    {...register('biggest_obstacle')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="به نظر خودتان بزرگترین مانع و چالش فعلی شما برای بهبود و اصلاح ساختار ذهن خود چیست؟"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('reasons_selection')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="اصلی‌ترین دلایل شما برای انتخاب مدرسه ناسو چه بوده‌اند؟"
                    required
                  />
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'know_school'}
                    label="چگونه با مدرسه آشنا شده‌اید؟"
                    options={dataSelectInput.introduction}
                    FormController={Controller}
                    formControl={control}
                    required={true}
                  />
                  {watch('know_school') == 'friends' && (
                    <Input
                      {...register('know_school_friends')}
                      type={'text'}
                      register={register}
                      label="نام معرف"
                      required
                    />
                  )}
                </NsCol>
                <NsCol item md={12} xss={24}>
                  <SelectField
                    name={'in_webinar'}
                    label="آیا در وبینار «آشنایی با مدرسه» شرکت کرده‌اید؟"
                    options={dataSelectInput.yes_no}
                    FormController={Controller}
                    formControl={control}
                    required={true}
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Radio
                    id="school_introduction9"
                    label="آیا قبل از ثبت‌نام، فیلم معرفی مدرسه را دیدید؟ (فیلمی که در
                      صفحه اول سایت قرار داده‌ایم)"
                    htmllabel="بله"
                    register={register}
                    val="yes"
                    name="school_introduction"
                  />
                  <Radio
                    id="school_introduction10"
                    htmllabel="خیر"
                    register={register}
                    val="no"
                    name="school_introduction"
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Radio
                    id="physical_illness7"
                    label="آیا بیماری جسمی خاصی دارید؟"
                    htmllabel="بله"
                    val="yes"
                    register={register}
                    name="physical_illness"
                  />
                  {watch('physical_illness') === 'yes' && (
                    <Input
                      {...register('physical_illness_desc')}
                      type={'text'}
                      register={register}
                      label="لطفا در مورد بیمار‌ی‌تان برای ما توضیح دهید"
                      required
                    />
                  )}
                  <Radio
                    id="physical_illness8"
                    htmllabel="خیر"
                    val="no"
                    register={register}
                    name="physical_illness"
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Radio
                    id="psychologist_diagnosis6"
                    label="آیا قبلا توسط روان‌شناس یا روان‌پزشک، تشخیص خاصی گرفته‌اید؟"
                    htmllabel="بله"
                    val="yes"
                    register={register}
                    name="psychologist_diagnosis"
                  />
                   {watch('psychologist_diagnosis') === 'yes' && (
                    <Input
                      {...register('psychologist_diagnosis_dec')}
                      type={'text'}
                      register={register}
                      label="لطفا در مورد بیمار‌ی‌تان برای ما توضیح دهید"
                      required
                    />
                  )}
                  <Radio
                    id="psychologist_diagnosis5"
                    htmllabel="خیر"
                    val="no"
                    register={register}
                    name="psychologist_diagnosis"
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Radio
                    id="drug_psychiatrist3"
                    label="آیا قبلا توسط روان‌شناس یا روان‌پزشک، دارویی برای شما تجویز
                    شده است؟"
                    htmllabel="بله"
                    val="yes"
                    register={register}
                    name="drug_psychiatrist"
                  />
                   {watch('drug_psychiatrist') === 'yes' && (
                    <Input
                      {...register('drug_psychiatrist_dec')}
                      type={'text'}
                      register={register}
                      label="لطفا در مورد بیمار‌ی‌تان برای ما توضیح دهید"
                      required
                    />
                  )}
                  <Radio
                    id="drug_psychiatrist4"
                    htmllabel="خیر"
                    val="no"
                    register={register}
                    name="drug_psychiatrist"
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('changes_in_3_years')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="دوست دارید تا ۳ سال دیگر چه تغییراتی در زندگی شما به وجود آمده باشد؟"
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('job_in_3_years')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="دوست دارید تا ۳ سال دیگر در چه شغلی مشغول به کار باشید؟ آن را توصیف کنید."
                    required
                  />
                </NsCol>
                <NsCol item xss={24}>
                  <Input
                    {...register('user_note')}
                    type={'text'}
                    textarea={true}
                    register={register}
                    label="هر صحبت دیگری دارید، برایمان بنویسید."
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
