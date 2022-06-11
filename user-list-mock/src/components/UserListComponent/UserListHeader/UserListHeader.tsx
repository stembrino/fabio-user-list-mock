import UserListCell from "../UserListCell/UserListCell";
import classes from "./UserListHeader.module.css";

interface Header {
  id: number;
  width: string;
  justfyContent: string;
  text: string;
}

interface Props {
  hederConfig: Header[];
}

const UserListHeader = (props: Props) => {
  const headerConfig = props.hederConfig.map((header: Header) => {
    return (
      <UserListCell key={header.id} width={header.width} justifyContent={header.justfyContent}>
        {header.text}
      </UserListCell>
    );
  });

  return <div className={classes.header}>{headerConfig}</div>;
};

export default UserListHeader;
