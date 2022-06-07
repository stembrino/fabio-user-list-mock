import { UserListController } from "../components/UserListComponent/UserList/UserListController";
import { UserService } from "../services/UserService";

export abstract class InjectDependency {
  public static injectUserController = () => new UserListController(new UserService());
}
