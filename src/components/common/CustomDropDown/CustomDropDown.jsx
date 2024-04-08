'use client';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Icon from '@/components/common/icon/icon';
import style from './CustomDropDown.module.scss';

const CustomDropDown = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState('همه');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleTitle = (props) => {
    setSelectedItem(props.child);
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderedMenuItems = children.map((child, i) => {
    return (
      <MenuItem onClick={() => handleTitle({ child })} key={i}>
        {child}
      </MenuItem>
    );
  });
  return (
    <div className={style[`customDropDown`]}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={style.customDropDown_button}
      >
        {
          <Icon
            width="20"
            height="20"
            src={'down'}
            className={open && style.customDropDown_button_open}
          />
        }
        <span className={style.customDropDown_button_title}>
          {selectedItem}
        </span>
      </Button>
      <Menu
        id="basic-menu"
        className={style.customDropDown_menu}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {renderedMenuItems}
      </Menu>
    </div>
  );
};

export default CustomDropDown;

// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';

// const options = [
//   'Show some love to MUI',
//   'Show all notification content',
//   'Hide sensitive notification content',
//   'Hide all notification content',
// ];

// export default function SimpleListMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [selectedIndex, setSelectedIndex] = React.useState(1);
//   const open = Boolean(anchorEl);
//   const handleClickListItem = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuItemClick = (event, index) => {
//     setSelectedIndex(index);
//     setAnchorEl(null);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <List
//         component="nav"
//         aria-label="Device settings"
//         sx={{ bgcolor: 'background.paper' }}
//       >
//         <ListItemButton
//           id="lock-button"
//           aria-haspopup="listbox"
//           aria-controls="lock-menu"
//           aria-label="when device is locked"
//           aria-expanded={open ? 'true' : undefined}
//           onClick={handleClickListItem}
//         >
//           <ListItemText
//             primary="When device is locked"
//             secondary={options[selectedIndex]}
//           />
//         </ListItemButton>
//       </List>
//       <Menu
//         id="lock-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'lock-button',
//           role: 'listbox',
//         }}
//       >
//         {options.map((option, index) => (
//           <MenuItem
//             key={option}
//             disabled={index === 0}
//             selected={index === selectedIndex}
//             onClick={(event) => handleMenuItemClick(event, index)}
//           >
//             {option}
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   );
// }
