import classes from "./ToolbarLayout.module.css";

interface Props {
  children: any;
}

const ToolbarLayout = (props: Props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default ToolbarLayout;
