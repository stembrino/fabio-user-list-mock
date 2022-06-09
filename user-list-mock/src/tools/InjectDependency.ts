import { UserService } from "../services/UserService";

export abstract class InjectDependency {
  public static injectUserService = () => new UserService();
}
