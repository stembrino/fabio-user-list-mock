import { useState } from "react";
import { UserDto } from "../../../services/interfaces/dto/UserDto";
import { collSizes } from "../../../tools/helper";
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
        <UserListCell width={collSizes.coll1} justifyContent="center">
          {props.userDto.id}
        </UserListCell>
        <UserListCell width={collSizes.coll2}> {props.userDto.name}</UserListCell>
        <UserListCell width={collSizes.coll3}> {props.userDto.email}</UserListCell>
        <UserListCell width={collSizes.coll4}>{props.userDto.address.city}</UserListCell>
        <UserListCell width={collSizes.coll5}>{props.userDto.company.name}</UserListCell>
        <UserListCell width={collSizes.coll6} justifyContent="center">
          {" "}
          {props.userDto.website ? "true" : "false"}
        </UserListCell>
      </div>
      <div hidden={!isRowSelected}>
        <UserDetails userDto={props.userDto} />
      </div>
    </>
  );
};
export default UserListRow;
