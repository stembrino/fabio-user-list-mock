import classes from "./AddUserFormLayout.module.css";

interface Props {
  children: any;
}

const AddUserFormLayout = (props: Props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default AddUserFormLayout;
