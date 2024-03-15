import { useState } from 'react';
import s from './customAccordion.module.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Icon from '@/components/common/icon/icon';

const CustomAccordion = ({ title = '', children }) => {
  return (
    <div className={s.accordion}>
      <Accordion>
        <AccordionSummary
          expandIcon={<Icon width="35" height="35" src={'down'} />}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
