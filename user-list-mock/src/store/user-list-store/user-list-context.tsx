import React from "react";
import { UserDto } from "../../services/interfaces/dto/UserDto";

const UserListContext = React.createContext({
  userList: [] as UserDto[],
  removeUser: (id: string) => {},
  setUserState: (userList: UserDto[]) => {},
});

export default UserListContext;
