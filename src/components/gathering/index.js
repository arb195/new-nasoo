'use client';
import React from 'react';
import CustomDropDown from '../common/CustomDropDown/CustomDropDown';
import style from './gathering.module.scss';
import SimpleGathering from './Simple-gathering';
import { useCookies } from 'react-cookie';
import AllGathering from '../../api/gathering/AllGathering';
import { NsContainer, NsRow } from '../common/grid/grid';

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
  const [cookies] = useCookies('UserId');
  const payload = { id: cookies?.usersInfo.UserId };
  AllGathering(payload)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => console.log(error.message));
  const renderdGatherings = (
    <NsRow>
      <SimpleGathering data={sampleGathering} />
      <SimpleGathering data={sampleGathering} />
      <SimpleGathering data={sampleGathering} />
      <SimpleGathering data={sampleGathering} />
    </NsRow>
  );
  return (
    <NsContainer className={style.gathering}>
      <NsRow className={style.gathering_headline}>
        <span>گردهمایی</span>
        <div className={style.gathering_headline_divider}></div>
        <div className={style.gathering_headline_list}>
          <CustomDropDown>{listType}</CustomDropDown>
        </div>
      </NsRow>
      {renderdGatherings}
    </NsContainer>
  );
};

export default Gathering;
