import React from "react";
import "./App.css";
import UserListLayout from "./components/Layout/UserListLayout/UserListLayout";
import UserList from "./components/UserListComponent/UserList/UserList";

function App() {
  return (
    <div className="App">
      <main className="mian-content">
      <UserListLayout>
        <UserList />
      </UserListLayout>
      </main>
    </div>
  );
}

export default App;
