'use client';
import React, { useState } from 'react';
import FAQ from '../FAQ/faq';
import Comments from '../comments/Comments';
import style from './gathering.module.scss';
import Icon from '@/components/common/icon/icon';
import { Button } from '@mui/material';
import Btn from '../common/btn/btn';
import { NsCol, NsContainer, NsRow } from '../common/grid/grid';
import ImageItem from '../common/imageItem/imageItem';

const SimpleGathering = (props) => {
  const {
    name,
    date,
    outDate,
    time,
    location,
    price,
    usedCapacity,
    canSubmit,
    submited,
    explanation,
  } = props.data;
  const [isCollapse, setIsCollapse] = useState(false);
  const submitPhrase = outDate
    ? 'این گردهمایی برگزار شده است'
    : canSubmit
    ? 'میخواهم در این گردهمایی شرکت کنم'
    : 'این گردهمایی برای شما نیست';
  const renderedCommentFaq = outDate ? (
    <Comments
      title="نظر شرکت‌کنندگان"
      note={false}
      placeholder="بازخورد خود را در ارتباط با این گردهمایی اینجا بنویسید."
    />
  ) : (
    <FAQ />
  );
  return (
    <NsContainer className={style.simpleGathering}>
      <div
        className={`${style.simpleGathering__ribbon} ${
          style[submited && 'submited']
        }`}
      >
        <Icon src={'ribbon'} className={style.simpleGathering__ribbon__icon} />
      </div>
      <NsContainer
        className={`${style.simpleGathering__main} ${
          style[!isCollapse && 'closedMain']
        }`}
      >
        <NsRow className={style.simpleGathering__main__button}>
          <Button id="basic-button" onClick={() => setIsCollapse(!isCollapse)}>
            <Icon
              width="20"
              height="20"
              src={'down'}
              className={
                isCollapse && style.simpleGathering__main__button__open
              }
            />
          </Button>
        </NsRow>
        <NsRow
          className={`${style.simpleGathering__main__body} ${
            style[!isCollapse && 'closedBody']
          }`}
        >
          <NsCol
            className={`${style.simpleGathering__main__body__pic} ${
              style[!isCollapse && 'closedPic']
            }`}
          >
            <img
          src={'/assets/img/gathering.png'}
        />
          </NsCol>
          <NsCol className={style.simpleGathering__main__body__info}>
            <div className={style.simpleGathering__main__body__info__title}>
              {name}
            </div>
            <div className={style.simpleGathering__main__body__info__item}>
              <Icon width="20" height="20" src={'calendar'} />
              {date}
            </div>
            {isCollapse && (
              <div className={style.simpleGathering__main__body__info__item}>
                <Icon width="20" height="20" src={'watch'} />
                {time}
              </div>
            )}
            {!outDate && (
              <div className={style.simpleGathering__main__body__info__item}>
                <Icon width="20" height="20" src={'money'} />
                {price}
              </div>
            )}
            <div className={style.simpleGathering__main__body__info__item}>
              <Icon width="20" height="20" src={'location'} />
              {location}
            </div>
            {isCollapse && (
              <div className={style.simpleGathering__main__body__info__item}>
                <Icon width="20" height="20" src={'users'} />
                {usedCapacity}
                {usedCapacity === 0 && (
                  <span> / شما اولین نفری هستید که ثبت نام میکنه </span>
                )}
              </div>
            )}
            {isCollapse && (
              <Btn className={style.simpleGathering__main__body__info__btn}>
                {submitPhrase}
              </Btn>
            )}
          </NsCol>
        </NsRow>

        {isCollapse && (
          <div>
            <NsRow className={style.simpleGathering__main__explanation}>
              {' '}
              <p>{explanation}</p>
            </NsRow>
            <NsRow>{renderedCommentFaq}</NsRow>
          </div>
        )}
      </NsContainer>
    </NsContainer>
  );
};

export default SimpleGathering;
