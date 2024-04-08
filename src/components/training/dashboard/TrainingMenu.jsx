import React, { useState } from 'react';
import SearchBox from '../../common/searchBox/SearchBox';
import style from './TrainingDashboard.module.scss';
import Icon from '../../common/icon/icon';
import ProgressBar from '../../common/progressBar/ProgressBar';

const Weeks = [
  { title: 'هفته اول', completionPercent: 100, status: 'completed' },
  { title: 'هفته دوم', completionPercent: 70, status: 'current' },
  { title: 'هفته سوم', completionPercent: 0, status: 'disable' },
];
const TrainingMenu = () => {
  const [showWeeks, setShowWeeks] = useState(true);
  const renderWeeks = Weeks.map((week, i) => {
    return (
      <div key={i} className={style.trainingMenu__item__week}>
        <div className={style.trainingMenu__item__week__main}>
          <div className={style.trainingMenu__item__week__main__input}>
            <input
              type="checkbox"
              value="week"
              checked={week.status === 'completed' && 'checked'}
            />
            <label for="week">{week.title}</label>
          </div>
          {week.status === 'disable' ? (
            <Icon width="24" height="24" src={'lock'} />
          ) : (
            <span>{week.completionPercent}%</span>
          )}
        </div>
        {week.status !== 'disable' && (
          <ProgressBar completedPercent={week.completionPercent} />
        )}
      </div>
    );
  });

  return (
    <div className={style.trainingMenu}>
      <SearchBox title="جستجو در محتوا دروس ..." />
      <div className={style.trainingMenu__item}>
        <button
          onClick={() => setShowWeeks(!showWeeks)}
          className={style.trainingMenu__item__name}
        >
          <Icon
            width="24"
            height="24"
            className={showWeeks && style.closeIcon}
            src={'down'}
          />
          <span>کلاس اول</span>
          <div className={style.trainingMenu__item__name__line}></div>
        </button>
        {showWeeks && renderWeeks}
      </div>
    </div>
  );
};

export default TrainingMenu;
