import { useEffect, useState } from "react";

export const useOpenQuestion = (openQuestion, itemNumber) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (itemNumber === openQuestion - 1) {
      setActive(true);
    }
  }, [openQuestion]);
  return { active, setActive };
};
