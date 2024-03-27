'use client';

import { useState, useContext, useEffect } from 'react';
import s from './personalMeetTable.module.scss';
import ImageItem from '@/components/common/imageItem/imageItem';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AllJalaseFardis } from '@/api/personal-meet';
import AppContext from '@/context/appContext';

const PersonalMeetTable = () => {
  const appContext = useContext(AppContext);
  const [user, setUser] = appContext.user;

  const [colDefs, setColDefs] = useState([
    { field: 'JafDate', headerName: 'تاریخ', flex: 1 },
    { field: 'JafBarTypeName', headerName: 'عنوان', flex: 2 },
    { field: 'JafDurView', headerName: 'مدت', flex: 1 },
    { field: 'JafDesc', headerName: 'توضیحات', flex: 3 },
  ]);
  const [rowData, setRowData] = useState([]);

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
      {/* <ImageItem
        src={'/assets/img/meetTable.png'}
        alt={'جلسه فردی'}
        width={1351}
        height={514}
      /> */}
      <div
        className={`ag-theme-quartz ${s.meetTable_wrraper}`}
        style={{ height: 500 }}
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} enableRtl={true} />
      </div>
    </div>
  );
};

export default PersonalMeetTable;
