import { UserFormController } from "../components/controller/UserFormController";
import { UserService } from "../services/UserService";

export abstract class InjectDependency {
  public static injectUserService = () => new UserService();
  public static injectUserFormController = () => new UserFormController();
}
