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

function App() {
  return (
    <div className="App">
      <main className="mian-content">
        <UserListProvider>
          <AddUserProvider>
            <AddUserBtn />
            <UserListLayout width="80vw" height="60vh">
              <UserList headerConfig={headerConfig} />
            </UserListLayout>
            <AddUserFormLayout>
              <AddUser />
            </AddUserFormLayout>
          </AddUserProvider>
        </UserListProvider>
      </main>
    </div>
  );
}

export default App;
