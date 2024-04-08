'use client';
import React, { useRef, useState } from 'react';
import TrainingDashboard from './dashboard/TrainingDashboard';
import TrainingMain from './main/TrainingMain';
import { NsContainer } from '@/components/common/grid/grid';
import style from './Training.module.scss';

const Training = () => {
  const [isDasshboardOpen, setIsDasshboardOpen] = useState(true);
  const dashboardRef = useRef();

  return (
    <NsContainer className={style.training}>
      <TrainingDashboard
        isDasshboardOpen={isDasshboardOpen}
        setIsDasshboardOpen={setIsDasshboardOpen}
        className={isDasshboardOpen && style['training__openDashboard']}
      />
      <TrainingMain />
    </NsContainer>
  );
};

export default Training;
