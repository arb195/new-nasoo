'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Comment from './Comment';
import style from './comments.module.scss';
import Icon from '../common/icon/icon';
import Btn from '../common/btn/btn';
import Input from '../common/input/input';
import Link from 'next/link';
import { NsContainer, NsRow } from '../common/grid/grid';
const commentItems = ['comment01'];
const Comments = ({ title, note, placeholder }) => {
  const { register, handleSubmit } = useForm();
  const [showCommentID, setShowCommentID] = useState(0);
  //   const handleSubmit = {};
  const renderComment = () =>
    commentItems.map((comment, i) => {
      showCommentID === i && <Comment item={comment} key={i} />;
    });
  return (
    <NsContainer className={style.comments}>
      <NsRow className={style.comments_title}>
        <Icon width="20" height="20" src={'pen'} />
        <snap> {title}</snap>
      </NsRow>
      <NsRow>{renderComment}</NsRow>
      <NsRow className={style.comments_body}>
        <form
          onSubmit={handleSubmit}
          className={style.comments_body_newComment}
        >
          <p className={style.comments_body_newComment_headline}>نظر شما</p>
          <Input
            {...register('comment')}
            type={'text'}
            textaria={true}
            register={register}
            placeholder={placeholder}
          />
          <div className={style.comments_body_newComment_submiting}>
            {note ? (
              <Btn
                type={'submit'}
                className={style.comments_body_newComment_submiting_btn}
              >
                ذخیره
              </Btn>
            ) : (
              <>
                <Btn
                  type={'submit'}
                  className={style.comments_body_newComment_submiting_btn}
                >
                  ارسال
                </Btn>
                <Link
                  href={'#'}
                  className={style.comments_body_newComment_submiting_link}
                >
                  بیشتر
                </Link>
              </>
            )}
          </div>
        </form>
      </NsRow>
    </NsContainer>
  );
};

export default Comments;
