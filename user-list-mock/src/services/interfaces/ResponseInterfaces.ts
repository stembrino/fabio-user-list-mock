import { UserDto } from "./dto/UserDto";

export interface DeleteUserResponse {
  status: number;
  genericResponse: any;
  deletedId: string;
}

export interface UpdateUserResponse {
  status: number;
  genericResponse: UserDto;
}
