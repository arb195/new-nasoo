import React from 'react';
import s from './tableheader.module.scss';
import Icon from '@/components/common/icon/icon';

const TableHeader = ({
  headerGroups,
  pageType,
  noTax,
  isDollor,
  print = false,
}) => {
  return (
    <thead>
      {headerGroups?.map((headerGroup, index) => {
        const rowProps = headerGroup.getHeaderGroupProps();
        const rowkey = rowProps.key;
        delete rowProps.key;

        return (
          <tr className={s.tHead} key={rowkey ? rowkey : index} {...rowProps}>
            {pageType != 'collapse'
              ? headerGroup.headers?.map((column, index) => {
                  const cellProps = column.getSortByToggleProps();
                  const cellkey = cellProps.key;

                  // delete cellProps.key;

                  return column.id == 'price' ? (
                    <th
                      key={cellkey ? cellkey : index}
                      {...cellProps}
                      className={s.tHead_priceTh}
                    >
                      قیمت
                      <span>{isDollor ? ' $ ' : ' تومان '}</span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <Icon src="arrow-long-top" width={7} height={7} />
                        ) : (
                          <Icon src="arrow-long-bottom" width={7} height={7} />
                        )
                      ) : (
                        ''
                      )}
                    </th>
                  ) : (
                    <th
                      key={cellkey ? cellkey : index}
                      {...cellProps}
                      className={
                        print && (column.id == 'chart' || column.id == 'buy')
                          ? 'd-none'
                          : ''
                      }
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <Icon src="arrow-long-top" width={7} height={7} />
                          ) : (
                            <Icon
                              src="arrow-long-bottom"
                              width={7}
                              height={7}
                            />
                          )
                        ) : (
                          ''
                        )}
                      </span>
                    </th>
                  );
                })
              : headerGroup.headers?.map((column, index) => {
                  const cellProps = column.getHeaderProps(
                    column.getSortByToggleProps()
                  );
                  const cellkey = cellProps.key;
                  delete cellProps.key;

                  return (
                    <React.Fragment key={index}>
                      {column.id == 'product_name' && (
                        <th
                          className={s.tHead_prodNameTh}
                          key={cellkey ? cellkey : index}
                          {...cellProps}
                        >
                          نام محصول
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <Icon src="arrow-long-top" width={7} height={7} />
                            ) : (
                              <Icon
                                src="arrow-long-bottom"
                                width={7}
                                height={7}
                              />
                            )
                          ) : (
                            ''
                          )}
                        </th>
                      )}
                      {(index == 2 || index == 3) &&
                        column.id != 'price' &&
                        column.id != 'tax' &&
                        column.id != 'chart' && (
                          <th key={cellkey ? cellkey : index} {...cellProps}>
                            {column.render('Header')}
                            <span>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <Icon
                                    src="arrow-long-top"
                                    width={7}
                                    height={7}
                                  />
                                ) : (
                                  <Icon
                                    src="arrow-long-bottom"
                                    width={7}
                                    height={7}
                                  />
                                )
                              ) : (
                                ''
                              )}
                            </span>
                          </th>
                        )}
                      {column.id == 'price' && (
                        <th
                          key={cellkey ? cellkey : index}
                          {...cellProps}
                          className={s.tHead_priceTh}
                        >
                          <span className={s.price_title}>
                            <i> قیمت {isDollor ? ' $ ' : ' تومان '}</i>
                            {noTax == false && <span>+ ارزش افزوده</span>}
                          </span>
                        </th>
                      )}
                    </React.Fragment>
                  );
                })}
          </tr>
        );
      })}
    </thead>
  );
};

export default TableHeader;
