import { useContext } from "react";
import { AddUserContext } from "../../../../store/add-user-store/AddUserProvider";
import Button from "../../../UI/Button/Button";
import classes from "./AddUserBtn.module.css";

const AddUserBtn = () => {
  const addUserContext = useContext(AddUserContext);

  const openAddUserFormHandler = (event: any) => {
    event.preventDefault();
    addUserContext.isFormClosed ? addUserContext.openForm() : addUserContext.closeForm();
  };
  return (
    <Button
      text="Add User"
      clickHandler={openAddUserFormHandler}
      hasCLicked={addUserContext.isFormClosed}
      coloUnclicked="#437bdb"
      colorClicked="#2f5ead"
    />
  );
};

export default AddUserBtn;
