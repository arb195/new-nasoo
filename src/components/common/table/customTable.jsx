"use client";
import dynamic from 'next/dynamic';
import { useActivity } from '@/hook/useActivity';
import { useModal } from '@/hook/useModal';
import Link from 'next/link';
import React, { useMemo, memo, useState, useEffect } from 'react';
import ChartReq from '../../singleProduct/chartReq/chartReq';
import s from './customTable.module.scss';
import TablePaginationActions from './tablePagination/tablePagination';
import Icon from '@/components/common/icon/icon';
import { useTable, useSortBy, usePagination } from 'react-table';
import TableHeader from './tableHeader/tableHeader';
import Row from './tableRow/tableRow';
import { usePreparePath } from '@/hook/usePreparePath';

const CustomModal = dynamic(
  () => import('@/components/common/modals/customModal/customModal'),
  {
    ssr: true,
  }
);

function HaveChartBtn(name) {
  return name.accessor === 'chart';
}

function PriceCell({ price, pageType }) {
  return (
    <>
      <div
        className={`${s.priceCellVal} ${
          price.price?.price ? '' : s.priceCellVal_empty
        }`}
      >
        {price.price?.diff && (
          <span className={s.popover}>
            {price.price.status == 'up'
              ? ' افزایش '
              : price.price.status == 'down'
              ? ' کاهش '
              : ''}
            {price.price.diff != 0 ? price.price.diff : 'ثابت'}
            {price.price.diff != 0
              ? price.price.is_dollar
                ? ' $ '
                : ' تومان '
              : ''}
          </span>
        )}
        {price.price?.price ? (
          <>
            {price.price.price}
            <span>{price.price.is_dollar ? ' $ ' : ''}</span>
            {price.price.status == 'up' ? (
              <Icon
                src="angle-up"
                className={s.iconAngleUp}
                width={6}
                height={6}
              />
            ) : price.price.status == 'down' ? (
              <Icon
                src="angle-down"
                className={s.iconAngleDown}
                width={6}
                height={6}
              />
            ) : (
              ''
            )}
          </>
        ) : (
          'تماس بگیرید'
        )}
      </div>
      {pageType == 'collapse' && (
        <span className={s.tax}>{price.price?.tax}</span>
      )}
    </>
  );
}

function Table({
  classes,
  columns,
  data,
  defaultSort = [],
  pageType,
  isDollor,
  noTax,
  setTitleModal,
  setContentModal,
  dataRow,
  chartNonce,
  toggle,
  print = false,
  tableIndex,
  goToindex,
  rowCount = 10,
  caption
}) {

  const defaultSortBy = useMemo(() => {
    if (defaultSort == null) {
      return [];
    }
    return defaultSort?.map((item) => {
      return {
        id: item,
        desc: false,
      };
    });
  }, [defaultSort]);
    
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        sortBy: defaultSortBy,
      },
    },
    useSortBy,
    usePagination
  );
  useEffect(() => {
    if (print) {
      setPageSize(999999);
    } else {
      setPageSize(rowCount);
    }
  }, [print]);

  return (
    <>
      <table
        className={`${s.table} ${classes}`}
        style={{ width: print ? 1051 : '100%' }}
        {...getTableProps()}
        role="presentation"
      >
        {caption &&
          <caption className={s.table_caption}>
            { caption }
          </caption> 
        }
        <TableHeader
          headerGroups={headerGroups}
          isDollor={isDollor}
          noTax={noTax}
          pageType={pageType}
          print={print}
        />

        {page.length ? (
          <tbody className={s.table_tBody} {...getTableBodyProps()}>
            {page?.map((row, i) => {
              prepareRow(row);
              return (
                <Row
                  key={i}
                  row={row}
                  pageType={pageType}
                  isDollor={isDollor}
                  noTax={noTax}
                  setTitleModal={setTitleModal}
                  setContentModal={setContentModal}
                  dataRow={dataRow[row.index]}
                  chartNonce={chartNonce}
                  toggle={toggle}
                  print={print}
                />
              );
            })}
          </tbody>
        ) : (
          <tbody className={s.table_tBody}>
            <tr>
              <td className={s.notFindData} colSpan={12}>
                اطلاعاتی یافت نشد
              </td>
            </tr>
          </tbody>
        )}
      </table>
      {pageOptions.length > 1 && (
        <TablePaginationActions
          page={pageIndex}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          count={pageOptions.length * pageSize}
          tableIndex={tableIndex}
          goToindex={goToindex}
          rowsPerPage={rowCount}
        />
      )}
    </>
  );
}

const CustomTable = ({
  header,
  rowsData,
  // pagination,
  classes,
  chart_nonce,
  noTax,
  isDollor,
  device = null,
  print = false,
  defaultSort = null,
  pageType,
  tableIndex,
  goToindex,
  disableSort = false,
  rowCount,
  caption = false
}) => {
  const [pageTypeTable, setPageTypeTable] = useState(pageType);
  let pathname = usePreparePath('/mobile');
  useEffect(() => {
    if (print) {
      setPageTypeTable('full');
    } else {
      setPageTypeTable(pageType);
    }
  }, [print, pageType]);

  const [active] = useActivity();
  const [
    openModal,
    toggle,
    contentModal,
    setContentModal,
    titleModal,
    setTitleModal,
  ] = useModal();
  // table columns
  let columns = useMemo(() => {
    return Object.keys(header)?.map((item) => {
      if (item === undefined || item === null || item === '') {
        return {
          Header: 'بدون نام',
          accessor: 'noName',
          disableSortBy: disableSort,
        };
      }

      if (item == 'price') {
        return {
          Header: header[item],
          accessor: item,
          disableSortBy: disableSort,
          sortType: (rowA, rowB, id) => {
            const a =
              rowA.values[id].props.price.price.price != null
                ? rowA.values[id].props.price.price.price
                : '999999999';
            const b =
              rowB.values[id].props.price.price.price != null
                ? rowB.values[id].props.price.price.price
                : '999999999';

            if (a > b) return 1;
            if (b > a) return -1;
            return 0;
          },
        };
      }

      if (defaultSort && defaultSort.includes('price')) {
        return {
          Header: header[item],
          accessor: item,
          disableSortBy: disableSort,
          sortType: (rowA, rowB, id) => {
            const hasPriceA = rowA.values['price'].props.price.price.price
              ? true
              : false;
            const hasPriceB = rowB.values['price'].props.price.price.price
              ? true
              : false;
            if (hasPriceA === true && hasPriceB === true) {
              if (rowA.values[id] > rowB.values[id]) return 1;
              if (rowA.values[id] < rowB.values[id]) return -1;
            } else if (hasPriceA === false && hasPriceB === false) {
              if (rowA.values[id] > rowB.values[id]) return 1;
              if (rowA.values[id] < rowB.values[id]) return -1;
            } else if (hasPriceA === false && hasPriceB === true) {
              return 1;
            } else if (hasPriceA === true && hasPriceB === false) {
              return -1;
            }
            return 0;
          },
        };
      }
      return {
        Header: header[item],
        accessor: item,
        disableSortBy: disableSort,
      };
    });
  }, [header]);

  if (!columns.find(HaveChartBtn)) {
    columns.push(
      {
        Header: 'نمودار',
        accessor: 'chart',
        disableSortBy: true,
      },
      {
        Header: 'خرید',
        accessor: 'buy',
        disableSortBy: true,
      }
    );
  }
  // table data
  let data = useMemo(() => {
    return rowsData?.map((item) => {
      return {
        ...item.cells,
        product_name: (
          <>
            <Link
              prefetch={false}
              href={`/product/${
                item?.url ? decodeURIComponent(item?.url) : pathname + '#'
              }`}
            >
              {item.cells.product_name ?? '-'}
            </Link>
          </>
        ),
        price: <PriceCell price={item} pageType={pageTypeTable} />,
        tax: item.price.tax ?? '-',
        chart: (
          <Icon
            src="chart2"
            width={13}
            height={16}
            className={`${s.openChart} openChartTrack`}
            onClick={() => {
              setTitleModal(item.cells['product_name']);
              setContentModal(
                <ChartReq
                  id={item.id}
                  title={item.cells['product_name']}
                  nonce={chart_nonce}
                  link={'/product/' + decodeURIComponent(item.url)}
                  device={device}
                />
              );
              toggle();
            }}
            id={`chart_${item.id}`}
          />
        ),
        buy: (
          <Link
            prefetch={false}
            href={`/product/${
              item?.url ? decodeURIComponent(item?.url) : pathname + '#'
            }`}
            id={`cart_${item?.id}`}
          >
            <Icon
              src="basket"
              className={`${s.openChart} cartTrack`}
              width={17}
              height={17}
            />
          </Link>
        ),
      };
    });
  }, [pageTypeTable, rowsData, chart_nonce]);

  return (
    <>
      {(openModal || active) && (
        <CustomModal status={openModal} onClose={toggle} title={titleModal}>
          {contentModal}
        </CustomModal>
      )}
      <Table
        classes={classes}
        columns={columns}
        data={data}
        dataRow={rowsData}
        defaultSort={defaultSort}
        pageType={pageTypeTable}
        isDollor={isDollor}
        noTax={noTax}
        setTitleModal={setTitleModal}
        setContentModal={setContentModal}
        chartNonce={chart_nonce}
        toggle={toggle}
        print={print}
        tableIndex={tableIndex}
        goToindex={goToindex}
        rowCount={rowCount}
        caption={caption}
      />
    </>
  );
};

export default memo(CustomTable);
