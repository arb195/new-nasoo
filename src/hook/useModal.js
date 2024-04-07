'use client';

import { useState } from 'react';

export function useModal(status = false) {
  const [openModal, setOpenModal] = useState(status);
  const [contentModal, setContentModal] = useState(null);
  const [titleModal, setTitleModal] = useState(null);

  function toggle() {
    setOpenModal(!openModal);
  }

  return [
    openModal,
    toggle,
    contentModal,
    setContentModal,
    titleModal,
    setTitleModal,
  ];
}
