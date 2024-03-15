import s from './customSortableList.module.scss';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { useState } from 'react';
import Icon from '@/components/common/icon/icon';

const SortableItem = sortableElement(({ value }) => (
  <li className={s.sortable_item}>
    {value}
    <Icon width="17" height="17" src={'change-order'} />
  </li>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <ul className={s.sortable_itemWrraper}>{children}</ul>;
});

const CustomSortableList = ({ title = '' }) => {
  const [sortData, setSortData] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ]);
  const onSortEnd = (events) => {
    const { oldIndex, newIndex } = events;
    setSortData(arrayMoveImmutable(sortData, oldIndex, newIndex));
  };

  return (
    <div className={s.sortable}>
      <span className={s.sortable_title}>{title}</span>
      <SortableContainer onSortEnd={onSortEnd}>
        {sortData.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </SortableContainer>
    </div>
  );
};

export default CustomSortableList;
