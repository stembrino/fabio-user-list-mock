import UserListRow from "../UserListRow/UserListRow";
import classes from "./UserList.module.css";

import { UserDto } from "../../../services/interfaces/dto/UserDto";
import { useContextUserList } from "../../../store/user-list-store/user-list-context";
import UserListHeader from "../UserListHeader/UserListHeader";
import { headerConfig } from "../../config/header.config";
import Loading from "../../UI/Loading/Loading";

const UserList = () => {
  const userListContext = useContextUserList();

  const userListItems = userListContext.userList.map((userDto: UserDto) => <UserListRow key={userDto.id} userDto={userDto} />);
  return (
    <div className={classes["user-list-container"]}>
      <UserListHeader hederConfig={headerConfig} />
      {userListItems.length > 0 ? userListItems : <Loading />}
    </div>
  );
};

export default UserList;
