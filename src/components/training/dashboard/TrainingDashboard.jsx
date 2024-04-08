import React from 'react';
import style from './TrainingDashboard.module.scss';
import Icon from '../../common/icon/icon';
import TrainingMenu from './TrainingMenu';

const DashboardItems = [
  { title: 'کارت یادآوری', iconSrc: 'reminder' },
  { title: 'چالش‌ها', iconSrc: 'star' },
  { title: 'پروژه شناختی', iconSrc: 'trophy' },
];

const TrainingDashboard = (props) => {
  const { isDasshboardOpen, setIsDasshboardOpen } = props;
  const renderDashboardItem = DashboardItems.map((item, i) => (
    <dev className={style.trainingDashboard__item} key={i}>
      <Icon
        className={style.trainingDashboard__item__icon}
        src={item.iconSrc}
      />
      {isDasshboardOpen && <span>{item.title}</span>}
    </dev>
  ));
  return (
    <aside className={style.trainingDashboard}>
      <button
        className={
          style[('trainingDashboard__item', 'trainingDashboard__showButton')]
        }
        onClick={() => setIsDasshboardOpen(!isDasshboardOpen)}
      >
        <Icon
          className={!isDasshboardOpen && style.closeIcon}
          width="32"
          height="24"
          src={'guillemet'}
        />
        {isDasshboardOpen && <span>مخفی کردن منو</span>}
      </button>

      {isDasshboardOpen ? (
        <TrainingMenu />
      ) : (
        <btn
          className={style.trainingDashboard__trainingMenuButton}
          onClick={() => setIsDasshboardOpen(!isDasshboardOpen)}
        >
          <Icon
            className={style.trainingDashboard__trainingMenuButton__icon}
            width="32"
            height="32"
            src={'cap'}
          />
        </btn>
      )}

      {renderDashboardItem}
    </aside>
  );
};

export default TrainingDashboard;
