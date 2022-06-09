import { useState } from "react";
import { UserDto } from "../../../services/interfaces/dto/UserDto";
import classes from "./UserDetails.module.css";

interface Props {
  userDto: UserDto;
}

const UserDetails = (props: Props) => {
  const { userDto } = props;
  const { address } = userDto;
  const [isToEdit, setIsToEdit] = useState(false);
  const [name, setName] = useState(userDto.name);
  const [username, setUsername] = useState(userDto.username);
  const [email, setEmail] = useState(userDto.email);
  const [phone, setPhone] = useState(userDto.phone);
  const [website, setWebsite] = useState(userDto.website);

  const editHandler = (e: any) => {
    e.preventDefault();
    setIsToEdit(!isToEdit);
  };

  const nameHandleChange = (event: any) => {
    console.debug(event.target.value);
    const nameEdited = event.target.value;
    setName(nameEdited);
  };

  const usernameHandleChange = (event: any) => {
    console.debug(event.target.value);
    const usernameEdited = event.target.value;
    setUsername(usernameEdited);
  };

  const emailHandleChange = (event: any) => {
    console.debug(event.target.value);
    const emailEdited = event.target.value;
    setEmail(emailEdited);
  };

  const phoneHandleChange = (event: any) => {
    console.debug(event.target.value);
    const phoneEdited = event.target.value;
    setPhone(phoneEdited);
  };

  const websiteHandleChange = (event: any) => {
    console.debug(event.target.value);
    const websiteEdited = event.target.value;
    setWebsite(websiteEdited);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.debug(name, username, email, phone, website);
  };

  const buttonStyles = { margin: "10px 5px 10px 5px", cursor: "pointer", backgroundColor: isToEdit ? "#c5c5c5" : "" };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes["detail-container"]}>
        <div className={classes.label}>USER INFO:</div>
        <div className={`${classes["first-block"]} ${classes.block}`}>
          <div>
            ID: <span>{userDto.id}</span>
          </div>
          <div>
            NAME: <input type="text" value={name} onChange={nameHandleChange} disabled={!isToEdit} />
          </div>
          <div>
            USER NAME: <input type="text" value={username} onChange={usernameHandleChange} disabled={!isToEdit} />
          </div>
          <div>
            E-MAIL: <input type="email" value={email} onChange={emailHandleChange} disabled={!isToEdit} />
          </div>
          <div>
            PHONE: <input type="text" value={phone} onChange={phoneHandleChange} disabled={!isToEdit} />
          </div>
          <div>
            SUIT: <input type="text" value={website} onChange={websiteHandleChange} disabled={!isToEdit} />
          </div>
        </div>
        <div className={classes.label}>ADDRESS:</div>
        <div className={`${classes["second-block"]} ${classes.block}`}>
          <div>STREET: {address.street}</div>
          <div>SUIT: {address.suite}</div>
          <div>CITY: {address.city}</div>
          <div>ZIPCODE: {address.zipcode}</div>
          <div>
            GEO: lat:{address.geo.lat} lng: {address.geo.lng}
          </div>
        </div>
        <div className={classes.label}>BUSINESS INFO:</div>
        <div className={`${classes["third-block"]} ${classes.block}`}>
          <div>COMPANY: {userDto.company.name}</div>
          <div>PHRASE: {userDto.company.catchPhrase}</div>
          <div>BS: {userDto.company.bs}</div>
        </div>
        <button style={buttonStyles} onClick={editHandler}>
          EDIT
        </button>
        <input style={buttonStyles} type="submit" value="SUBMIT" disabled={!isToEdit} />
      </div>
    </form>
  );
};

export default UserDetails;
