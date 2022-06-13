import classes from "./Button.module.css";

interface Props {
  clickHandler: any;
  text: string;
  style?: object;
  hasCLicked: boolean;
  colorClicked: string;
  coloUnclicked: string;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props.clickHandler}
      style={{
        ...props.style,
        backgroundColor: props.hasCLicked ? props.colorClicked : props.coloUnclicked,
      }}
      className={classes["add-user-btn"]}
    >
      {props.text}
    </button>
  );
};

export default Button;
