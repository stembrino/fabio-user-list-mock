import { useContext } from "react";
import { AlertContext } from "../../store/alert-store/AlertProvider";
import classes from "./AlertErros.module.css";

interface Props {
  message: string;
}

const AlertErros = (props: Props) => {
  const alertContext = useContext(AlertContext);

  const displayAlert = () => {
    return (
      alertContext.showAlert && (
        <div className={classes.container}>
          <div>{alertContext.messageError}</div>
        </div>
      )
    );
  };
  return <>{displayAlert()}</>;
};

export default AlertErros;
