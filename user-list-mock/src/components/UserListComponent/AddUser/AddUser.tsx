import { useContext } from "react";
import { UserDto } from "../../../services/interfaces/dto/UserDto";
import { AddUserContext } from "../../../store/add-user-store/AddUserProvider";
import { InjectDependency } from "../../../tools/InjectDependency";
import UserForm from "../UserForm/UserForm";
import classes from "./AddUser.module.css";

const userFormController = InjectDependency.injectUserFormController();

const initialFormFieldValues: UserDto = {
  address: userFormController.injectAddress("", "", "", "", userFormController.injectGeo("", "")),
  company: userFormController.injectCompany("", "", ""),
  email: "",
  id: 0,
  name: "",
  phone: "",
  username: "",
  website: "",
};

const AddUser = () => {
  const addUserContext = useContext(AddUserContext);
  const closeFormHandler = (event: any) => {
    event.preventDefault();
    addUserContext.closeForm();
  };

  const submitHandler = (userDto: UserDto) => {};

  return (
    <div
      style={{ display: addUserContext.isFormClosed ? "none" : "block" }}
      className={classes.container}
    >
      <button onClick={closeFormHandler} className={classes["btn-close"]}>
        Close
      </button>
      <div className={classes["form-container"]}>
        <UserForm
          hideDeleteBtn={true}
          hideEditBtn={true}
          enableEdit={true}
          blockButtons={false}
          submitHandler={submitHandler}
          userDto={initialFormFieldValues}
          display="block"
        />
      </div>
    </div>
  );
};
export default AddUser;
