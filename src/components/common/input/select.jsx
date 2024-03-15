'use client';

import { useState, useEffect, memo } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputSkeleton from './inputSkeleton/inputSkeleton';
import s from './select.module.scss';
import Icon from '@/components/common/icon/icon';

const SelectField = ({
  name = null,
  label = null,
  desc = null,
  options = null,
  className = null,
  register = null,
  required = null,
  setValue = null,
  multiSelect = false,
  hasSearch = false,
  defaultValues,
  onChanged,
  FormController,
  formControl,
  ...otherProps
}) => {
  const [val, setVal] = useState([]);
  const [data, setData] = useState(options);

  useEffect(() => {
    if (defaultValues) {
      if (multiSelect) {
        setVal([defaultValues]);
        if (setValue) {
          setValue(name, [defaultValues]);
        }
      } else {
        setVal(defaultValues);
        if (setValue) {
          setValue(name, defaultValues);
        }
      }
    }
  }, [defaultValues, multiSelect, name, setValue]);

  const handleChange = (event) => {
    if (onChanged) {
      onChanged(event);
    }
    setVal(event.target.value);
    if (setValue) {
      setValue(name, event.target.value);
    }
  };

  function filterSearch(e, items) {
    const data = Object.values(items);
    const value = e.target.value;
    const search_parameters = Object.keys(Object.assign({}, ...data));
    if (value.trim != '') {
      return items.filter((item) =>
        search_parameters.some((parameter) =>
          item[parameter].toString().toLowerCase().includes(value)
        )
      );
    } else {
      return items;
    }
  }

  const generateOptions = (items) => {
    return items?.map((item, index) => {
      return (
        <MenuItem key={index} value={item.value}>
          {multiSelect && (
            <input
              className={s.selectBox_checkbox}
              type="checkbox"
              checked={val?.indexOf(item?.value) > -1}
            />
          )}
          {item.title}
          {item?.icon && (
            <Icon
              className={s.selectBox__icon}
              width={item?.icon.width}
              height={item?.icon.height}
              src={item?.icon.src}
            />
          )}
        </MenuItem>
      );
    });
  };
  return (
    <>
      {data ? (
        <FormController
          control={formControl}
          name={name}
          render={({ field }) => (
            <FormControl
              fullWidth
              className={`${className} ${s.selectBox__select}`}
            >
              {label && (
                <span className={`input-title ${s.selectBox_label}`}>
                  {label}
                </span>
              )}
              <div className={s.selectBox_selectWrapper}>
                <Select
                  labelId={name + '_label'}
                  id={name}
                  value={val}
                  // label={label}
                  onOpen={() => {
                    setData(options);
                  }}
                  multiple={multiSelect ? true : false}
                  onChange={(e) => {
                    handleChange(e);
                    field.onChange(e.target.value);
                  }}
                  renderValue={
                    multiSelect
                      ? (selected) => {
                          const selection = options?.filter((obj) => {
                            return selected.includes(obj.value);
                          });
                          return selection
                            ?.map((item) => {
                              return item.title;
                            })
                            .join(', ');
                        }
                      : (selected) => {
                          const selection = options?.find((value) => {
                            return value?.value === selected;
                          });
                          return (
                            <div>
                              <span>{selection?.title}</span>
                            </div>
                          );
                        }
                  }
                  {...otherProps}
                >
                  {hasSearch && (
                    <MenuItem
                      disableGutters={true}
                      onKeyDown={(e) => e.stopPropagation()}
                    >
                      <input
                        type="text"
                        className={s.searchFilter}
                        placeholder="جست و جو کنید..."
                        onChange={(e) => {
                          e.stopPropagation();
                          setData(filterSearch(e, options));
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      />
                    </MenuItem>
                  )}
                  {generateOptions(data)}
                </Select>
                <Icon
                  className={s.selectBox__icon}
                  width="24"
                  height="24"
                  src={'down'}
                />
              </div>
              {desc && <span className={`input-bottom-desc`}>{desc}</span>}
            </FormControl>
          )}
        />
      ) : (
        <InputSkeleton />
      )}
    </>
  );
};

export default memo(SelectField);
