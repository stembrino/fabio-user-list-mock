import { useEffect, useState } from "react";
import { UserDto } from "../../services/interfaces/dto/UserDto";
import { DeleteUserResponse, UpdateUserResponse } from "../../services/interfaces/ResponseInterfaces";
import { InjectDependency } from "../../tools/InjectDependency";
import UserListContext from "./user-list-context";

const userListService = InjectDependency.injectUserService();

const UserListProvider = (props: any) => {
  const [userList, setUserList] = useState([] as UserDto[]);
  useEffect(() => {
    const updateUserList = async () => {
      console.debug("updateUserList has been called");
      const userListDto = await userListService.getUsersDto();
      setUserList(userListDto);
    };
    updateUserList();
  }, []);

  const removeUserByIdHandler = async (id: string) => {
    const deleteUserResponse: DeleteUserResponse = await userListService.deleteUser(id);
    console.debug(deleteUserResponse);
    setUserList((prevUserList) => {
      return prevUserList.filter((user: UserDto) => user.id.toString() !== deleteUserResponse.deletedId);
    });
  };

  const updateUser = async (userDto: UserDto): Promise<number> => {
    const updateResponse: UpdateUserResponse = await userListService.updateUser(userDto);
    const userUpdated: UserDto = updateResponse.genericResponse;

    setUserList((prevStateuserList) => {
      let newUserList = prevStateuserList.map((prevUser: UserDto) => {
        if (prevUser.id === userUpdated.id) {
          return userUpdated;
        }
        return prevUser;
      });

      return newUserList;
    });
    return updateResponse.status;
  };

  const userListContext = {
    userList: userList as UserDto[],
    removeUserById: removeUserByIdHandler,
    updateUser,
  };

  return <UserListContext.Provider value={userListContext}>{props.children}</UserListContext.Provider>;
};

export default UserListProvider;
