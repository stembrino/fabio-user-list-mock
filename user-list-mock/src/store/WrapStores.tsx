import AddUserProvider from "./add-user-store/AddUserProvider";
import AlertProvider from "./alert-store/AlertProvider";
import UserListProvider from "./user-list-store/UserListProvider";

interface Props {
  children: any;
}

const WrapStores = (props: Props) => {
  return (
    <UserListProvider>
      <AddUserProvider>
        <AlertProvider>{props.children}</AlertProvider>
      </AddUserProvider>
    </UserListProvider>
  );
};

export default WrapStores;
