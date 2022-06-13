import classes from "./AppLayout.module.css";

interface Props {
  children: any;
}

const AppLayout = (props: Props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default AppLayout;
