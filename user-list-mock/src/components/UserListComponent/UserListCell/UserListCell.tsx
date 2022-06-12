import classes from "./UserListCell.module.css";

interface Props {
  width?: string;
  children?: any;
  justifyContent?: string;
}

const UserListCell = (props: Props) => {
  const DEFAULT_WIDTH = "15vw";

  return (
    <div
      style={{ width: props.width || DEFAULT_WIDTH, justifyContent: props.justifyContent }}
      className={classes.cell}
    >
      {props.children}
    </div>
  );
};

export default UserListCell;
