import React, { useState } from "react";

export const AddUserContext = React.createContext({
  isFormClosed: false,
  closeForm: () => {},
  openForm: () => {},
});

const AddUserProvider = (props: any) => {
  const [isFormClosed, setIsFormClosed] = useState(false);

  const closeForm = () => {
    setIsFormClosed(true);
  };

  const openForm = () => {
    setIsFormClosed(false);
  };

  const defaultState = {
    isFormClosed,
    closeForm,
    openForm,
  };
  return <AddUserContext.Provider value={defaultState}>{props.children}</AddUserContext.Provider>;
};

export default AddUserProvider;
