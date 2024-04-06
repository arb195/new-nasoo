import s from './customSortableList.module.scss';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { useEffect, useState } from 'react';
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

const CustomSortableList = ({
  title = '',
  data = [],
  name,
  register,
  required,
  FormController,
  formControl,
}) => {
  const [sortData, setSortData] = useState([]);
  const [dataInput, setDataInput] = useState([]);

  useEffect(() => {
    setSortData(data);
  }, [data]);

  useEffect(() => {
    if (sortData) {
      setDataInput(
        sortData?.map((item, index) => {
          return item?.value;
        })
      );
    }
  }, [sortData]);

  const onSortEnd = (events) => {
    const { oldIndex, newIndex } = events;
    setSortData(arrayMoveImmutable(sortData, oldIndex, newIndex));
  };
  return (
    <div className={s.sortable}>
      <span className={s.sortable_title}>{title}</span>
      <SortableContainer onSortEnd={onSortEnd}>
        {sortData.map((value, index) => (
          <SortableItem key={value?.value} index={index} value={value?.title} />
        ))}
      </SortableContainer>
      <FormController
        control={formControl}
        name={name}
        render={({ field }) => (
          <input
            // {...register(name, { required, value: dataInput })}
            type={'text'}
            {...(field.value = dataInput)}
          />
        )}
      />
    </div>
  );
};

export default CustomSortableList;
