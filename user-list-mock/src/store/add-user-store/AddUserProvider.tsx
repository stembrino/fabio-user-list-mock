import React, { useState } from "react";

export const AddUserContext = React.createContext({
  isFormClosed: true,
  closeForm: () => {},
  openForm: () => {},
});

const AddUserProvider = (props: any) => {
  const [isFormClosed, setIsFormClosed] = useState(true);

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
