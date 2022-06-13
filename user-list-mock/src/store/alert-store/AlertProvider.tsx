import React, { useState } from "react";
import { UserFormController } from "../../components/controller/UserFormController";

export const AlertContext = React.createContext({
  showAlert: false,
  showAlertByMiliseconds: (messageError: string) => {},
  messageError: "",
});

interface Props {
  children: any;
}

const AlertProvider = (props: Props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [messageError, setMessageError] = useState("");

  const showAlertByMiliseconds = (
    messageError: string,
    miliseconds: number = UserFormController.FIVE_SEC
  ) => {
    setMessageError(messageError);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, miliseconds);
  };

  const alertContext = {
    showAlert: showAlert,
    showAlertByMiliseconds,
    messageError,
  };

  return <AlertContext.Provider value={alertContext}>{props.children}</AlertContext.Provider>;
};

export default AlertProvider;
