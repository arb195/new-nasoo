"use client";

import { useEffect, useState } from 'react';

export const useCheckBreakpoint = (device = null) => {
  // console.log(device);

  const initialBreaks = (device == 'mobile' ? ['xxs', 'xs', 'sm'] : ['md', 'lg', 'xl']);
  const [breakpoints, setBreakpoints] = useState(initialBreaks);
  
  const checkRes = (breaks) => {
    const isSize = breaks.some((item) => {
      return breakpoints.join().indexOf(item) > -1;
    });
    return isSize;
  };

  useEffect(() => {
    if (device !== 'mobile') {
      breakpointInit(window.innerWidth, setBreakpoints);
    }
    window.addEventListener('resize', (e) => {
      let size = e.target.innerWidth;
      breakpointInit(size ?? 1900, setBreakpoints);
    });
  }, [device]);

  return [checkRes];
};

const breakpointInit = (size, setBreakpoints) => {
  let sizes = Object.keys(getBreakpoints());
  setBreakpoints(detectBreakpoints(sizes, size));
};

const detectBreakpoints = (sizes, size = 1900) => {
  let finalSize = null;
  if(size >= 1336){
    finalSize =  'xl';
    return [finalSize]
  }
  if(size <= 320){
    finalSize =  'xxs';
    return [finalSize]
  }
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i] <= size) {
      finalSize = getBreakpoints()[sizes[i]];
    } 
  }
  return [finalSize];
};

const getBreakpoints = () => {
  return {
    320: 'xxs',
    576: 'xs',
    768: 'sm',
    992: 'md',
    1200: 'lg',
    1336: 'xl',
  };
};