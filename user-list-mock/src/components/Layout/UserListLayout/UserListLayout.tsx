import classes from "./UserListLayout.module.css";
interface Props {
  width: string;
  maxHeight?: string;
  height?: string;
  children: any;
}
const UserListLayout = (props: Props) => {
  return (
    <div style={{ width: props.width, maxHeight: props.maxHeight, height: props.height }} className={classes["table-container"]}>
      {props.children}
    </div>
  );
};

export default UserListLayout;
