import UserListRow from "../UserListRow/UserListRow";
import classes from "./UserList.module.css";

import { UserDto } from "../../../services/interfaces/dto/UserDto";
import { useContextUserList } from "../../../store/user-list-store/user-list-context";
import UserListHeader from "../UserListHeader/UserListHeader";
import Loading from "../../UI/Loading/Loading";

interface Props {
  headerConfig: any;
}
const UserList = (props: Props) => {
  const userListContext = useContextUserList();

  const userListItems = userListContext.userList.map((userDto: UserDto) => <UserListRow key={userDto.id} userDto={userDto} />);
  return (
    <div className={classes["user-list-container"]}>
      <UserListHeader hederConfig={props.headerConfig} />
      {userListItems.length > 0 ? userListItems : <Loading />}
    </div>
  );
};

export default UserList;
