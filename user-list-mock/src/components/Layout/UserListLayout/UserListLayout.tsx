import classes from "./UserListLayout.module.css";

const UserListLayout = (props: any) => {
  return <div className={classes["table-container"]}>{props.children}</div>;
};

export default UserListLayout;
