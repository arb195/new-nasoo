import React, { useRef } from 'react';
import style from './searchBox.module.scss';
import Icon from '../icon/icon';

const SearchBox = ({ title, handleSubmit }) => {
  const searchInputRef = useRef(null);

  return (
    <form
      onSubmit={() => handleSubmit(searchInputRef)}
      className={style.searchBox}
    >
      <button type="submit">
        <Icon src={'search'} />
      </button>
      <input type="text" placeholder={title} />
    </form>
  );
};

export default SearchBox;
