'use client';

import { useState, useContext, useEffect } from 'react';
import s from './personalMeetTable.module.scss';
import ImageItem from '@/components/common/imageItem/imageItem';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AllJalaseFardis } from '@/api/personal-meet';
import AppContext from '@/context/appContext';

///
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

const PersonalMeetTable = () => {
  const appContext = useContext(AppContext);
  const [user, setUser] = appContext.user;

  const CustomButtonComponent = (props) => {
    return <button onClick={() => window.alert('clicked')}>Push Me!</button>;
  };

  // const [colDefs, setColDefs] = useState([
  //   { field: 'JafDate', headerName: 'تاریخ', flex: 1 },
  //   { field: 'JafBarTypeName', headerName: 'عنوان', flex: 2 },
  //   { field: 'JafDurView', headerName: 'مدت', flex: 1 },
  //   { field: 'JafDesc', headerName: 'توضیحات', flex: 3 },
  // ]);

  const defaultData = [
    {
      JafBarTypeName: 'حضوری',
      JafTypeName: 'جلسه فردی',
      JafDurView: '-40',
      Id: 4,
      UsrId: 0,
      DajId: 1,
      JafFactId: null,
      JafDate: '1402/04/07',
      JafTimeStart: '15:00',
      JafTimeEnd: '15:45',
      JafDescRepUser: '',
      JafDesc: 'گزارش جلسه',
      JafBarType: 2,
      JafType: 4,
      JafDur: 45,
      JafDurCalc: 40,
      JafDurKasr: 5,
    },
    {
      JafBarTypeName: 'حضوری',
      JafTypeName: 'افزایش مدت زمان',
      JafDurView: '+60',
      Id: 3,
      UsrId: 0,
      DajId: 0,
      JafFactId: 1100,
      JafDate: '1402/03/23',
      JafTimeStart: '',
      JafTimeEnd: '',
      JafDescRepUser: '',
      JafDesc: 'افزایش مدت زمان',
      JafBarType: 0,
      JafType: 2,
      JafDur: 0,
      JafDurCalc: 60,
      JafDurKasr: 0,
    },
    {
      JafBarTypeName: 'حضوری',
      JafTypeName: 'هدیه',
      JafDurView: '+5',
      Id: 2,
      UsrId: 0,
      DajId: 0,
      JafFactId: null,
      JafDate: '1402/02/12',
      JafTimeStart: '',
      JafTimeEnd: '',
      JafDescRepUser: '',
      JafDesc: 'هدیه',
      JafBarType: 0,
      JafType: 1,
      JafDur: 0,
      JafDurCalc: 5,
      JafDurKasr: 0,
    },
    {
      JafBarTypeName: 'حضوری',
      JafTypeName: 'جلسه کلاسی',
      JafDurView: '+20',
      Id: 1,
      UsrId: 0,
      DajId: 0,
      JafFactId: null,
      JafDate: '1402/01/01',
      JafTimeStart: '',
      JafTimeEnd: '',
      JafDescRepUser: '',
      JafDesc: 'جلسه کلاسی',
      JafBarType: 0,
      JafType: 3,
      JafDur: 0,
      JafDurCalc: 20,
      JafDurKasr: 0,
    },
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('JafDate', {
      header: () => 'تاریخ',
      cell: (info) => <i>{info.getValue()}</i>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.JafBarTypeName, {
      id: 'JafBarTypeName',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>عنوان</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('JafDurView', {
      header: () => 'مدت',
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('JafDesc', {
      header: () => <span>توضیحات</span>,
      cell: (info) => {
        return info.row.getCanExpand() ? (
          <span>
            {info.getValue()}
            <button
              {...{
                onClick: info.row.getToggleExpandedHandler(),
                style: { cursor: 'pointer' },
              }}
            >
              {info.row.getIsExpanded() ? '👇' : '👉'}
            </button>
          </span>
        ) : (
          '🔵'
        );
      },
      footer: (info) => info.column.id,
    }),
  ];

  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    if (user?.UserId) {
      AllJalaseFardis(user?.UserId)
        .then((res) => {
          setRowData(res?.data?.Data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user?.UserId]);

  return (
    <div className={s.meetTable}>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <>
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              {row.getIsExpanded() && (
                <tr>
                  {/* 2nd row is a custom 1 cell row */}
                  <td colSpan={row.getVisibleCells().length}>sssss</td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonalMeetTable;
