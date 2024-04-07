"use client";

import s from './customModal.module.scss';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Icon from '@/components/common/icon/icon';
import { useEffect } from 'react';

const CustomModal = ({
  status,
  title,
  children,
  onClose,
  modifier,
  noFullMobile,
  className = '',
  closeClass,
}) => {
  let modifiers =
    modifier &&
    modifier.split(' ')?.map((item) => {
      return s[item];
    });

  useEffect(() => {
    if (status) {
      document.body.classList.add('backDrop');
    } else {
      document.body.classList.remove('backDrop');
    }
  },[status])

  return (
    <Modal
      open={status}
      onClose={onClose}
      aria-labelledby="modal-modal-title transition-modal-title"
      aria-describedby="modal-modal-description transition-modal-description"
      closeAfterTransition
      sx={{ zIndex: 99999 }}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={status}>
        <div
          className={`${s.modal} ${className} ${modifiers ? modifiers : ''} ${
            noFullMobile ? s.noFullMobile : ''
          }`}
        >
          {title && (
            <div id="modal-modal-title" className={s.modal_title}>
              {title ?? ''}
            </div>
          )}
          <Icon
            src="close"
            className={`${s.modal_closeIcon} ${closeClass ? closeClass : ''}`}
            onClick={onClose}
          />
          <div id="modal-modal-description" className={s.modal_content}>
            {children ? children : 'هیچ محتوایی یافت نشد :('}
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
