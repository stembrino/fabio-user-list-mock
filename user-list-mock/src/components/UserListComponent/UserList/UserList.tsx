import { useEffect } from "react";
import { InjectDependency } from "../../../tools/InjectDependency";
import UserListRow from "../UserListRow/UserListRow";
import classes from "./UserList.module.css";

import { userDtoMock } from "../../../mock/MockUserDto.mock";
import { UserDto } from "../../../services/interfaces/dto/UserDto";

const userListController = InjectDependency.injectUserController();

const UserList = (props: any) => {
  useEffect(() => {
    // TODO: Use useState to fill the state table from here
    userListController.updateUserFromAPI();
  }, []);

  const userListItems = userDtoMock.map((userDto: UserDto) => <UserListRow key={userDto.id} userDto={userDto} />);
  return (
    <div className={classes["user-list-container"]}>
      {userListItems}
    </div>
  );
};

export default UserList;
