import { useContext } from "react";
import { UserDto } from "../../../services/interfaces/dto/UserDto";
import { AddUserContext } from "../../../store/add-user-store/AddUserProvider";
import { AlertContext } from "../../../store/alert-store/AlertProvider";
import { useContextUserList } from "../../../store/user-list-store/user-list-context";
import { InjectDependency } from "../../../tools/InjectDependency";
import { UserFormController } from "../../controller/UserFormController";
import UserForm from "../UserForm/UserForm";
import classes from "./AddUser.module.css";

const userFormController = InjectDependency.injectUserFormController();

const initialFormFieldValues: UserDto = {
  address: userFormController.injectAddress("", "", "", "", userFormController.injectGeo("", "")),
  company: userFormController.injectCompany("", "", ""),
  email: "",
  name: "",
  phone: "",
  username: "",
  website: "",
};

const AddUser = () => {
  const addUserContext = useContext(AddUserContext);
  const userListContext = useContextUserList();
  const alertContext = useContext(AlertContext);

  const closeFormHandler = (event: any) => {
    event.preventDefault();
    addUserContext.closeForm();
  };

  const submitHandler = async (userDto: UserDto) => {
    try {
      const response: number = await userListContext.addUser(userDto);
      console.debug(response);
      addUserContext.closeForm();
    } catch (error) {
      alertContext.showAlertByMiliseconds(UserFormController.DELETE_ERROR_MSG);
    }
  };

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
          hasIdField={false}
          cleanFieldsAfterSubmit={true}
        />
      </div>
    </div>
  );
};
export default AddUser;
