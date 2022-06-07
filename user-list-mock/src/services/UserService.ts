import { getAPI } from "../tools/adapterAPI";
import { UserDto } from "./interfaces/dto/UserDto";

export class UserService {
  private readonly apiUrl = "https://jsonplaceholder.typicode.com/users";

  public fetchUsersDto = async (): Promise<UserDto> => {
    try {
      const userDto: UserDto = await getAPI(this.apiUrl);
      return userDto;
    } catch (error) {
      // TODO: return some mocked list
      console.error("Erro in User API", error);
      // @ts-ignore
      return null;
    }
  };
}
