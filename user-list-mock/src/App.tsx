import React from "react";
import "./App.css";
import { headerConfig } from "./components/config/header.config";
import AddUserFormLayout from "./components/Layout/AddUserFormLayout/AddUserFormLayout";
import UserListLayout from "./components/Layout/UserListLayout/UserListLayout";
import AddUserBtn from "./components/UserListComponent/AddUser/AddUserBtn/AddUserBtn";
import AddUser from "./components/UserListComponent/AddUser/AddUser";
import UserList from "./components/UserListComponent/UserList/UserList";
import UserListProvider from "./store/user-list-store/UserListProvider";
import AddUserProvider from "./store/add-user-store/AddUserProvider";
import AppLayout from "./components/Layout/AppLayout/AppLayout";
import ToolbarLayout from "./components/Layout/ToolbarLayout/AddUserFormLayout";
import AlertErros from "./components/AlertErros/AlertErros";
import WrapStores from "./store/WrapStores";

function App() {
  return (
    <div className="App">
      <main className="mian-content">
        <WrapStores>
          <AppLayout>
            <ToolbarLayout>
              <AddUserBtn />
            </ToolbarLayout>
            <UserListLayout width="80vw" height="60vh">
              <UserList headerConfig={headerConfig} />
            </UserListLayout>
            <AddUserFormLayout>
              <AddUser />
            </AddUserFormLayout>
          </AppLayout>
          <AlertErros message="Error" />
        </WrapStores>
      </main>
    </div>
  );
}

export default App;
