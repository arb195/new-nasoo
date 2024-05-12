
import dynamic from 'next/dynamic';
import { useActivity } from '@/hook/useActivity';
import { useModal } from '@/hook/useModal';
import Collapse from '@mui/material/Collapse';
import Link from 'next/link';
import React, { useState } from 'react';
import ChartReq from '@/components/singleProduct/chartReq/chartReq';
import PriceTable from '@/components/common/priceTable/priceTable';
import Icon from '@/components/common/icon/icon';
import s from './tableRow.module.scss';
import { usePreparePath } from '@/hook/usePreparePath';

const CustomModal = dynamic(
  () => import('@/components/common/modals/customModal/customModal'),
  {
    ssr: true,
  }
);
const Consultion = dynamic(
  () => import('@/components/common/modals/consultionModal/consultionModal'),
  {
    ssr: true,
  }
);

function Row({
  row,
  pageType,
  isDollor,
  device = null,
  setContentModal,
  setTitleModal,
  dataRow,
  chartNonce,
  toggle,
  print,
}) {
  const [active] = useActivity();
  const [open, setOpen] = useState(false);
  const [consulationModal, toggleConsulationModal] = useModal();
  const pathname = usePreparePath('/mobile');

  const rowProps = row.getRowProps();
  const rowkey = rowProps.key;
  delete rowProps.key;

  return (
    <>
      {(consulationModal || active) && (
        <CustomModal
          status={consulationModal}
          onClose={toggleConsulationModal}
          title={'درخواست مشاوره'}
        >
          <Consultion device={device} />
        </CustomModal>
      )}
      <tr className={s.tBodyRow} key={rowkey} {...rowProps}>
        {pageType != 'collapse'
          ? row.cells?.map((cell, index) => {
              const cellProps = cell.getCellProps();
              const cellkey = cellProps.key;
              delete cellProps.key;

              return (
                <React.Fragment key={index}>
                  {cell.column.id == 'product_name' ? (
                    <td key={cellkey} {...cellProps}>
                      {cell.render('Cell') ?? '-'}
                    </td>
                  ) : (
                    <td
                      key={cellkey}
                      {...cellProps}
                      className={
                        print &&
                        (cell.column.id == 'chart' || cell.column.id == 'buy')
                          ? 'd-none'
                          : ''
                      }
                    >
                      {cell.render('Cell').props.cell.value
                        ? cell.render('Cell')
                        : '-'}
                    </td>
                  )}
                </React.Fragment>
              );
            })
          : row?.cells?.map((cell, index) => {
              const cellProps = cell.getCellProps();
              const cellkey = cellProps.key;
              delete cellProps.key;

              return (
                <React.Fragment key={index}>
                  {cell.column.id == 'product_name' && (
                    <td key={cellkey} {...cellProps}>
                      <div className={s.tBodyRow_product_name}>
                        <button
                          aria-label="expand row"
                          size="small"
                          onClick={() => setOpen(!open)}
                          className={s.tBodyRow_collapseBtn}
                        >
                          {open ? (
                            <Icon src="arrow-top" width={12} height={10} />
                          ) : (
                            <Icon src="arrow-bottom" width={12} height={10} />
                          )}
                        </button>
                        {cell.render('Cell')}
                      </div>
                    </td>
                  )}
                  {(index == 2 || index == 3) &&
                    cell.column.id != 'price' &&
                    cell.column.id != 'tax' &&
                    cell.column.id != 'chart' && (
                      <td key={cellkey} {...cellProps}>
                        {cell.render('Cell')}
                      </td>
                    )}
                  {cell.column.id == 'price' && (
                    <>
                      <td key={cellkey} {...cellProps} colSpan="3">
                        <div className={s.tBodyRow_mainPriceCell}>
                          <span className={s.actions}>
                            <Icon
                              src="chart2"
                              width={13}
                              height={16}
                              className={s.openChart}
                              onClick={() => {
                                setTitleModal(dataRow.cells.product_name);
                                setContentModal(
                                  <ChartReq
                                    id={dataRow.id}
                                    title={dataRow.cells.product_name}
                                    nonce={chartNonce}
                                    link={
                                      '/product/' + decodeURIComponent(row.url)
                                    }
                                    device={device}
                                  />
                                );
                                toggle();
                              }}
                            />
                          </span>
                          <div className={s.tBodyRow_priceCell}>
                            {cell.render('Cell')}
                          </div>
                        </div>
                      </td>
                    </>
                  )}
                </React.Fragment>
              );
            })}
      </tr>
      {pageType == 'collapse' && (
        <tr>
          <td
            style={{
              paddingBottom: 0,
              paddingTop: 0,
              paddingRight: 6,
              paddingLeft: 6,
            }}
            colSpan={6}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <table className={s.mobileCollapse}>
                {row?.cells?.map((cell, i) => {
                  return (
                    i > 0 &&
                    (cell.column.id != 'price' &&
                    cell.column.id != 'tax' &&
                    cell.column.id != 'chart' &&
                    cell.column.id != 'buy' ? (
                      <tr key={i}>
                        <th>
                          <Icon src="doc" width={20} height={20} />
                          {cell.column.Header}
                        </th>
                        <td>{cell.render('Cell')}</td>
                      </tr>
                    ) : (
                      ''
                    ))
                  );
                })}
              </table>

              <PriceTable
                price={dataRow.price.price}
                tax={dataRow.price.tax}
                isDollar={isDollor}
              />
              <div className={s.collapseBtn}>
                <span
                  className={s.supportBtn}
                  onClick={() => {
                    toggleConsulationModal();
                  }}
                >
                  درخواست مشاوره
                  <Icon src="supp" width={13} height={13} />
                </span>
                <Link
                  prefetch={false}
                  href={`/product/${
                    dataRow?.url
                      ? decodeURIComponent(dataRow?.url)
                      : pathname + '#'
                  }`}
                >
                  خرید
                  <Icon src="basket" width={13} height={12} />
                </Link>

                <em
                  onClick={() => {
                    setTitleModal(dataRow.cells.product_name);
                    setContentModal(
                      <ChartReq
                        id={dataRow.id}
                        title={dataRow.cells.product_name}
                        nonce={chartNonce}
                        device={device}
                      />
                    );
                    toggle();
                  }}
                >
                  نمایش نمودار
                  <Icon
                    src="chart2"
                    className={s.openChart}
                    width={10}
                    height={12}
                  />
                </em>
              </div>
            </Collapse>
          </td>
        </tr>
      )}
    </>
  );
}

export default Row;
