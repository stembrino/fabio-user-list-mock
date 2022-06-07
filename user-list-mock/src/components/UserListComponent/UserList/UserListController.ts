import { UserDto } from "../../../services/interfaces/dto/UserDto";
import { UserService } from "../../../services/UserService";
import { deepClone } from "../../../tools/helper";

export class UserListController {
  private userService: UserService;
  private users: UserDto[];

  constructor(userServce: UserService) {
    this.userService = userServce;
    this.users = {} as UserDto[];
  }

  public updateUserFromAPI = async () => {
    this.users = await this.userService.fetchUsersDto();
  };

  public getUsers = () => deepClone(this.users);

  public setUser = (users: UserDto[]): void => {
    this.users = users;
  };
}
