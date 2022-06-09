import { useContext } from "react";
import UserListRow from "../UserListRow/UserListRow";
import classes from "./UserList.module.css";

import { UserDto } from "../../../services/interfaces/dto/UserDto";
import UserListContext from "../../../store/user-list-store/user-list-context";


const UserList = () => {
  const userListContext = useContext(UserListContext);

  const userListItems = userListContext.userList.map((userDto: UserDto) => <UserListRow key={userDto.id} userDto={userDto} />);
  return <div  className={classes["user-list-container"]}>{userListItems}</div>;
};

export default UserList;
