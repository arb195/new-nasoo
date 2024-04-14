import { useState } from 'react';
import s from './customAccordion.module.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Icon from '@/components/common/icon/icon';

const CustomAccordion = ({ title = '', grow = false, children }) => {
  return (
    <div className={s.accordion}>
      <Accordion>
        <AccordionSummary
          expandIcon={<Icon width="35" height="35" src={'down'} />}
        >
          <div className={s.accordion_titleWrraper}>
            <span className={s.accordion_title}>{title}</span>
            {grow && (
              <span className={s.accordion_growMain}>
                <span
                  style={{ width: grow + '%' }}
                  className={s.accordion_grow}
                ></span>
              </span>
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
