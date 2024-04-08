'use client';
import React, { useState } from 'react';
import CustomDropDown from '../common/CustomDropDown/CustomDropDown';
import style from './gathering.module.scss';
import SimpleGathering from './Simple-gathering';
import { useCookies } from 'react-cookie';
import AllGathering from '../../api/gathering/AllGathering';
import { NsContainer, NsRow } from '../common/grid/grid';
import Alert from '../common/alert/Alert';

const sampleGathering = {
  name: 'gathering',
  date: 'date',
  outDate: false,
  time: 'time',
  location: 'location',
  price: '1M',
  usedCapacity: 0,
  canSubmit: true,
  submited: true,
  explanation:
    'جدول ساختار ذهنجدول ساختار ذهنجدول ساختار ذهنجدول ساختار ذهنجدول ساختار ذهنجدول ساختار ذهنجدول ساختار ذهنجدول ساختار ذهنجدول ساختار ذهنجدول ساختار ذهنول ساختار ذهنجدول ساختار ذهنجدول ساختار ذهنساختار ذهنول ساختار ذهنجدول ساختار ذهنجدول ',
};
const listType = ['همه', 'مخصوص من', 'برگزار شده', 'برگزار نشده'];
const Gathering = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [cookies] = useCookies();
  AllGathering({ id: cookies?.usersInfo?.UserId })
    .then(({ data }) => {
      console.log(data);
    })
    .catch(() => setShowAlert(true));
  const renderdGatherings = (
    <NsRow>
      <SimpleGathering data={sampleGathering} />
    </NsRow>
  );
  return (
    <NsContainer className={style.gathering}>
      <NsRow className={style.gathering__headline}>
        <span>گردهمایی</span>
        <div className={style.gathering__headline__divider}></div>
        <div className={style.gathering__headline__list}>
          <CustomDropDown>{listType}</CustomDropDown>
        </div>
      </NsRow>
      {showAlert ? (
        <Alert>
          <span className={style.gathering__alert}>
            در حال حاضر اطلاعاتی گردهمایی در دسترس نیست. برای اطلاعات بیشتر با
            ما تماس بگیرید.
          </span>
        </Alert>
      ) : (
        renderdGatherings
      )}
    </NsContainer>
  );
};

export default Gathering;
