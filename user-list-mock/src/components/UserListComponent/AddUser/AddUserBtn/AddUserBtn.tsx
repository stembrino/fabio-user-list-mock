import { useContext } from "react";
import { AddUserContext } from "../../../../store/add-user-store/AddUserProvider";
import classes from "./AddUserBtn.module.css";

const AddUserBtn = () => {
  const addUserContext = useContext(AddUserContext);

  const openAddUserFormHandler = (event: any) => {
    event.preventDefault();
    addUserContext.isFormClosed ? addUserContext.openForm() : addUserContext.closeForm();
  };
  return (
    <button onClick={openAddUserFormHandler} className={classes["add-user-btn"]}>
      ADD USER
    </button>
  );
};

export default AddUserBtn;
