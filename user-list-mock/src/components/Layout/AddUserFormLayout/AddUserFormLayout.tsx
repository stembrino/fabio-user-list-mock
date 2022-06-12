import classes from "./AddUserFormLayout.module.css";

const AddUserFormLayout = (props: any) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default AddUserFormLayout;
