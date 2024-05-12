import React, { useRef } from 'react';
import s from './tablepagination.module.scss';
import Icon from '@/components/common/icon/icon';

const TablePaginationActions = ({
  count,
  page,
  rowsPerPage = 10,
  // onPageChange,
  gotoPage,
  nextPage,
  previousPage,
  tableIndex,
  goToindex,
}) => {
  const pageScroll = useRef(null);

  const handleBackButtonClick = () => {
    previousPage();
    goToindex(tableIndex);
  };

  const handleNextButtonClick = () => {
    nextPage();
    goToindex(tableIndex);
  };

  const handlepageClick = (event) => {
    gotoPage(event.target.innerText - 1);
    goToindex(tableIndex);
  };

  let pageCount = Math.ceil(count / rowsPerPage);
  let pageIndexes = [];
  for (let i = 0; i < pageCount; i++) {
    pageIndexes.push(
      <button
        key={i}
        disabled={page === i}
        className={`${page === i ? 'current' : ''} paginateTrack`}
        onClick={handlepageClick}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <div ref={pageScroll} className={s.pagination}>
      <button
        className={` prev ${page === 0 ? 'disable' : ''}`}
        onClick={handleBackButtonClick}
        disabled={page === 0}
      >
        <Icon src="arrow-right" width={12} height={12} />
      </button>
      {pageIndexes}
      <button
        className={`next ${
          page >= Math.ceil(count / rowsPerPage) - 1 ? 'disable' : ''
        }`}
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        <Icon src="arrow-left" width={12} height={12} />
      </button>
    </div>
  );
};

export default TablePaginationActions;
