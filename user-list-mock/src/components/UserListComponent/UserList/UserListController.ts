import { UserDto } from "../../../services/interfaces/dto/UserDto";
import { UserService } from "../../../services/UserService";
import { deepClone } from "../../../tools/helper";

export class UserListController {
  private userService: UserService;
  private users: any;

  constructor(userServce: UserService) {
    this.userService = userServce;
  }

  public updateUserFromAPI = async () => {
    this.users = await this.userService.fetchUsersDto();
  };

  public getUsers = () => deepClone(this.users);

  public setUser = (user: UserDto): void => {
    this.users = user;
  };
}
