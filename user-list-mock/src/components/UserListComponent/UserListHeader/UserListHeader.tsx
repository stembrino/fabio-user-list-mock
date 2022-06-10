import { collSizes } from "../../../tools/helper";
import UserListCell from "../UserListCell/UserListCell";
import classes from "./UserListHeader.module.css";

const UserListHeader = (props: any) => {
  return (
    <div className={classes.header}>
      <UserListCell width={collSizes.coll1} justifyContent="center">ID</UserListCell>
      <UserListCell width={collSizes.coll2} justifyContent="center">USERNAME</UserListCell>
      <UserListCell width={collSizes.coll3} justifyContent="center">E_MAIL</UserListCell>
      <UserListCell width={collSizes.coll4} justifyContent="center">CITY</UserListCell>
      <UserListCell width={collSizes.coll5} justifyContent="center">COMPANY NAME</UserListCell>
      <UserListCell width={collSizes.coll6} justifyContent="center">HAS WEBSITE</UserListCell>
    </div>
  );
};

export default UserListHeader;
