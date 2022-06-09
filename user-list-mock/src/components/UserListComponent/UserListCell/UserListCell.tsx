import classes from "./UserListCell.module.css";

interface Props {
  width?: string;
  children?: any;
}

const UserListCell = (props: Props) => {
  const DEFAULT_WIDTH = "15vw";

  return (
    <div style={{ width: props.width || DEFAULT_WIDTH }} className={classes.cell}>
      {props.children}
    </div>
  );
};

export default UserListCell;
