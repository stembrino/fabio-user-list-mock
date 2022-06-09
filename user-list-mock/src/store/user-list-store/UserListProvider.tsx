import { useEffect, useState } from "react";
import { userDtoMock } from "../../mock/MockUserDto.mock";
import { UserDto } from "../../services/interfaces/dto/UserDto";
import { InjectDependency } from "../../tools/InjectDependency";
import UserListContext from "./user-list-context";

const userListController = InjectDependency.injectUserController();

const UserListProvider = (props: any) => {
  const [userList, setUserList] = useState([] as UserDto[]);
  useEffect(() => {
    const updateUserList = async () => {
      console.debug("updateUserList has been called");
      await userListController.updateUserFromAPI();
      // TEMP: avoid use api in development
      // setUserList(userListController.getUsers());
      setUserList(userDtoMock);
    };
    updateUserList();
  }, []);

  const removeUserByIdHandler = (id: string) => {};

  const setUserState = (userList: UserDto[]) => {};

  const userListContext = {
    userList: userList as UserDto[],
    removeUser: removeUserByIdHandler,
    setUserState: setUserState,
  };

  return <UserListContext.Provider value={userListContext}>{props.children}</UserListContext.Provider>;
};

export default UserListProvider;
