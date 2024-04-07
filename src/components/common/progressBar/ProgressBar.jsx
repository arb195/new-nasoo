import React from 'react';
import style from './progressBar.module.scss';

const ProgressBar = ({ completedPercent }) => {
  const progressStyle = {
    width: `${completedPercent}%`,
    height: '100%',
    backgroundColor: Number(completedPercent) === 100 ? '#4683B6' : '#fdbf44',
    borderRadius: '2px',
  };
  return (
    <div className={style.progressBar}>
      <div style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
