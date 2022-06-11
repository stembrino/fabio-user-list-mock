import React, { useContext } from "react";
import { UserDto } from "../../services/interfaces/dto/UserDto";
import { UpdateUserResponse } from "../../services/interfaces/ResponseInterfaces";

const UserListContext = React.createContext({
  userList: [] as UserDto[],
  removeUserById: (id: string) => {},
  updateUser: (userDto: UserDto): Promise<number> => ({} as Promise<number>),
});

export const useContextUserList = () => useContext(UserListContext);

export default UserListContext;
