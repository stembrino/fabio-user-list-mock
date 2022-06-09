import React from "react";
import { UserDto } from "../../services/interfaces/dto/UserDto";

const UserListContext = React.createContext({
  userList: [] as UserDto[],
  removeUserById: (id: string) => {},
});

export default UserListContext;
