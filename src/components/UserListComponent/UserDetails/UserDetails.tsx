import { useContext, useState } from "react";
import { UserDto } from "../../../services/interfaces/dto/UserDto";
import { AlertContext } from "../../../store/alert-store/AlertProvider";
import { useContextUserList } from "../../../store/user-list-store/user-list-context";
import { UserFormController } from "../../controller/UserFormController";
import UserForm from "../UserForm/UserForm";
// import classes from "./UserDetails.module.css";

interface Props {
  userDto: UserDto;
}

const UserDetails = (props: Props) => {
  const [isToEdit, setIsToEdit] = useState(false);
  const [blockButtons, setBlockButtons] = useState(false);
  const userListContext = useContextUserList();
  const alertContext = useContext(AlertContext);

  const editHandlerCallback = () => {
    setIsToEdit(!isToEdit);
  };

  const submitHandlerCallback = async (userDto: UserDto) => {
    console.debug(userDto);
    try {
      setBlockButtons(true);
      await userListContext.updateUser(userDto);
    } catch (error) {
      console.error(error);
      alertContext.showAlertByMiliseconds(UserFormController.EDIT_ERROR_MSG);
    } finally {
      setIsToEdit(false);
      setBlockButtons(false);
    }
  };

  const deleteHandlerCallback = async (id: string) => {
    try {
      setBlockButtons(true);
      await userListContext.removeUserById(id);
    } catch (error) {
      console.error(error);
      alertContext.showAlertByMiliseconds(UserFormController.DELETE_ERROR_MSG);
    } finally {
      setBlockButtons(false);
    }
  };
  return (
    <>
      <UserForm
        userDto={props.userDto}
        enableEdit={isToEdit}
        editHandler={editHandlerCallback}
        submitHandler={submitHandlerCallback}
        deleteHandler={deleteHandlerCallback}
        blockButtons={blockButtons}
        display="flex"
        hasIdField={true}
      />
    </>
  );
};
export default UserDetails;
