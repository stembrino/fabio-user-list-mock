import { useContext, useState } from "react";
import { UserDto } from "../../../services/interfaces/dto/UserDto";
import UserListContext from "../../../store/user-list-store/user-list-context";
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
  const [street, setStreet] = useState(userDto.address.street);
  const [website, setWebsite] = useState(userDto.website);
  const [suite, setSuite] = useState(userDto.address.suite);
  const [city, setCity] = useState(userDto.address.city);
  const [zipcode, setZipcode] = useState(userDto.address.zipcode);
  const [lat, setLat] = useState(address.geo.lat);
  const [lng, setLng] = useState(address.geo.lng);
  const [companyName, setCompanyName] = useState(userDto.company.name);
  const [catchPhrase, setCatchPhrase] = useState(userDto.company.catchPhrase);
  const [bs, setBs] = useState(userDto.company.bs);

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

  const streetHandleChange = (event: any) => {
    console.debug(event.target.value);
    const streetEdited = event.target.value;
    setStreet(streetEdited);
  };

  const suiteHandleChange = (event: any) => {
    console.debug(event.target.value);
    const suiteEdited = event.target.value;
    setSuite(suiteEdited);
  };

  const cityHandleChange = (event: any) => {
    console.debug(event.target.value);
    const cityEdited = event.target.value;
    setCity(cityEdited);
  };

  const zipCodeHandleChange = (event: any) => {
    console.debug(event.target.value);
    const zipcodeEdited = event.target.value;
    setZipcode(zipcodeEdited);
  };

  const latCodeHandleChange = (event: any) => {
    console.debug(event.target.value);
    const latCodeEdited = event.target.value;
    setLat(latCodeEdited);
  };

  const lngCodeHandleChange = (event: any) => {
    console.debug(event.target.value);
    const lngCodeEdited = event.target.value;
    setLng(lngCodeEdited);
  };

  const companyNameCodeHandleChange = (event: any) => {
    console.debug(event.target.value);
    const companyNameCodeEdited = event.target.value;
    setCompanyName(companyNameCodeEdited);
  };

  const catchPhraseCodeHandleChange = (event: any) => {
    console.debug(event.target.value);
    const catchPhraseCodeEdited = event.target.value;
    setCatchPhrase(catchPhraseCodeEdited);
  };

  const bsCodeHandleChange = (event: any) => {
    console.debug(event.target.value);
    const bsCodeEdited = event.target.value;
    setBs(bsCodeEdited);
  };

  const userListContext = useContext(UserListContext);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.debug(name, username, email, phone, website);
  };

  const deleteHandler = async (event: any) => {
    event.preventDefault();
    await userListContext.removeUserById(userDto.id.toString());
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
          <div>
            STREET: <input type="text" value={street} onChange={streetHandleChange} disabled={!isToEdit} />
          </div>
          <div>
            SUIT: <input type="text" value={suite} onChange={suiteHandleChange} disabled={!isToEdit} />
          </div>
          <div>
            CITY: <input type="text" value={city} onChange={cityHandleChange} disabled={!isToEdit} />
          </div>
          <div>
            ZIPCODE: <input type="text" value={zipcode} onChange={zipCodeHandleChange} disabled={!isToEdit} />
          </div>
          <div className={"italic"}>
            GEO: (lat)
            <input type="text" value={lat} onChange={latCodeHandleChange} disabled={!isToEdit} />
            (lng)
            <input type="text" value={lng} onChange={lngCodeHandleChange} disabled={!isToEdit} />
          </div>
        </div>
        <div className={classes.label}>BUSINESS INFO:</div>
        <div className={`${classes["third-block"]} ${classes.block}`}>
          <div>
            COMPANY: <input type="text" value={companyName} onChange={companyNameCodeHandleChange} disabled={!isToEdit} />
          </div>
          <div>
            PHRASE: <input type="text" value={catchPhrase} onChange={catchPhraseCodeHandleChange} disabled={!isToEdit} />
          </div>
          <div>
            BS: <input type="text" value={bs} onChange={bsCodeHandleChange} disabled={!isToEdit} />
          </div>
        </div>
        <button style={buttonStyles} onClick={editHandler}>
          EDIT
        </button>
        <input type="submit" value="SUBMIT" disabled={!isToEdit} />
        <button onClick={deleteHandler}>DELETE</button>
      </div>
    </form>
  );
};

export default UserDetails;
