import { UserDto } from "./dto/UserDto";

export interface DeleteUserResponse {
  status: number;
  genericResponse: any;
  deletedId: string;
}

export interface UpdateUserResponse {
  status: number;
  userDto: UserDto;
}

export interface AddUserResponse {
  status: number;
  userDto: UserDto;
}
