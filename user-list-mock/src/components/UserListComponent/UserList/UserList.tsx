import { useEffect } from "react";
import { InjectDependency } from "../../../tools/InjectDependency";

const userListController = InjectDependency.injectUserController();

const UserList = (props: any) => {
  useEffect(() => {
    userListController.updateUserFromAPI();
  }, []);
  return (
    <div>
      <button title="CLICK" onClick={() => console.log(userListController.getUsers())}>
        CLICK
      </button>
      <button onClick={userListController.updateUserFromAPI}>Update User From API</button>
    </div>
  );
};

export default UserList;
