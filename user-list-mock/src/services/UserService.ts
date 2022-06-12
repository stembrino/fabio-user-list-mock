import { deleteByIdAPI, getAPI, postAPI, updateAPI } from "../tools/adapterAPI";
import { UserDto } from "./interfaces/dto/UserDto";
import {
  AddUserResponse,
  DeleteUserResponse,
  UpdateUserResponse,
} from "./interfaces/ResponseInterfaces";

export class UserService {
  private readonly apiUrl = "https://jsonplaceholder.typicode.com/users";

  public getUsersDto = async (): Promise<UserDto[]> => {
    try {
      const userDto: UserDto[] = await getAPI(this.apiUrl);
      return userDto;
    } catch (error) {
      // TODO: return some mocked list
      console.error("Erro in User API", error);
      // @ts-ignore
      return null;
    }
  };

  public deleteUser = async (id: string): Promise<DeleteUserResponse> => {
    try {
      const deleteUserResponse: DeleteUserResponse = await deleteByIdAPI(this.apiUrl, id);
      return deleteUserResponse;
    } catch (error) {
      console.error("Error when deleting a User");
      throw error;
    }
  };

  public updateUser = async (userDto: UserDto): Promise<UpdateUserResponse> => {
    try {
      const updateUserResponse = await updateAPI(`${this.apiUrl}/${userDto.id}`, userDto);
      return {
        status: updateUserResponse.genericResponseRaw.status,
        userDto: updateUserResponse.genericResponse,
      };
    } catch (error) {
      console.error("Error when deleting a User");
      throw error;
    }
  };

  /**
   * This function was created because the mock backend jsonplaceholder send always the same id
   */
  private tempWorkAroundIdMockIssue = (userDto: UserDto, userList: UserDto[]): void => {
    const userIds = userList.map((user) => Number(user.id));
    const hasAlredyAddUser = userIds.includes(Number(userDto.id));
    if (!hasAlredyAddUser) return;
    let greatestId = Math.max(...userIds);
    greatestId++;
    userDto.id = greatestId.toString();
  };

  public addUser = async (userDto: UserDto, userList: UserDto[]): Promise<AddUserResponse> => {
    try {
      const addUserResponse = await postAPI(this.apiUrl, userDto);
      const userDtoRespose = addUserResponse.genericResponse as UserDto;
      userDtoRespose.id = userDtoRespose.id?.toString();
      console.debug("AUDIT: addUserResponse", addUserResponse);
      this.tempWorkAroundIdMockIssue(addUserResponse.genericResponse, userList);
      return {
        status: addUserResponse.genericResponseRaw.status,
        userDto: addUserResponse.genericResponse,
      };
    } catch (error) {
      console.error("Error when deleting a User");
      throw error;
    }
  };
}
