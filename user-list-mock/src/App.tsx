import React from "react";
import "./App.css";
import { headerConfig } from "./components/config/header.config";
import UserListLayout from "./components/Layout/UserListLayout/UserListLayout";
import UserList from "./components/UserListComponent/UserList/UserList";
import UserListProvider from "./store/user-list-store/UserListProvider";

function App() {
  return (
    <div className="App">
      <main className="mian-content">
        <UserListProvider>
          <UserListLayout width="80vw" height="60vh">
            <UserList headerConfig={headerConfig} />
          </UserListLayout>
        </UserListProvider>
      </main>
    </div>
  );
}

export default App;
