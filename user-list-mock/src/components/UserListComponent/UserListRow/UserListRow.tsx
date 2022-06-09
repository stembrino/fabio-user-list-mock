import { useState } from "react";
import { UserDto } from "../../../services/interfaces/dto/UserDto";
import UserDetails from "../UserDetails/UserDetailForm";
import UserListCell from "../UserListCell/UserListCell";
import classes from "./UserListRow.module.css";

interface Props {
  userDto: UserDto;
}

const UserListRow = (props: Props) => {
  const [isRowSelected, setIsRowSelected] = useState(false);

  const selectRowHandler = (e: any) => {
    e.preventDefault();
    setIsRowSelected(!isRowSelected);
  };
  return (
    <>
      <div style={{ backgroundColor: isRowSelected ? "#d0433c" : "white" }} onClick={selectRowHandler} className={classes.row}>
        <UserListCell width="5vw">{props.userDto.id}</UserListCell>
        <UserListCell> {props.userDto.name}</UserListCell>
        <UserListCell width="25vw"> {props.userDto.email}</UserListCell>
        <UserListCell>{props.userDto.address.city}</UserListCell>
        <UserListCell>{props.userDto.company.name}</UserListCell>
        <UserListCell width="5vw"> {props.userDto.website ? "true" : "false"}</UserListCell>
      </div>
      <div hidden={!isRowSelected}>
        <UserDetails userDto={props.userDto} />
      </div>
    </>
  );
};
export default UserListRow;
