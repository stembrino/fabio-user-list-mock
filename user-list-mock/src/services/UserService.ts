import { deleteByIdAPI, getAPI } from "../tools/adapterAPI";
import { UserDto } from "./interfaces/dto/UserDto";
import { DeleteUserResponse } from "./interfaces/ResponseInterfaces";

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
}
