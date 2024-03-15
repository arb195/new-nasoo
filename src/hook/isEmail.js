export const isEmail = (emailAdress) => {
  let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress && emailAdress?.match(regex)) {
    return true;
  } else {
    return false;
  }
};
