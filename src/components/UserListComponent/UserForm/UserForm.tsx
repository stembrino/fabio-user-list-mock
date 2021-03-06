import { useState } from "react";
import { Address, Company, UserDto } from "../../../services/interfaces/dto/UserDto";
import { InjectDependency } from "../../../tools/InjectDependency";
import classes from "./UserForm.module.css";

interface Props {
  userDto: UserDto;
  enableEdit: boolean;
  blockButtons: boolean;
  editHandler?: any;
  submitHandler: any;
  deleteHandler?: any;
  hideEditBtn?: boolean;
  hideDeleteBtn?: boolean;
  display: string;
  hasIdField?: boolean;
  cleanFields?: any;
  cleanFieldsAfterSubmit?: boolean;
}

const userFormController = InjectDependency.injectUserFormController();

const UserForm = (props: Props) => {
  const { userDto } = props;
  const { address } = userDto;
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

  const setPrevState = () => {
    setName(userDto.name);
    setUsername(userDto.username);
    setEmail(userDto.email);
    setPhone(userDto.phone);
    setStreet(userDto.address.street);
    setWebsite(userDto.website);
    setSuite(userDto.address.suite);
    setCity(userDto.address.city);
    setZipcode(userDto.address.zipcode);
    setLat(address.geo.lat);
    setLng(address.geo.lng);
    setCompanyName(userDto.company.name);
    setCatchPhrase(userDto.company.catchPhrase);
    setBs(userDto.company.bs);
  };

  const editHandler = (e: any) => {
    e.preventDefault();
    if (props.enableEdit) {
      setPrevState();
    }
    props.editHandler();
  };

  const cleanFields = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setStreet("");
    setWebsite("");
    setSuite("");
    setCity("");
    setZipcode("");
    setLat("");
    setLng("");
    setCompanyName("");
    setCatchPhrase("");
    setBs("");
  };

  const submiHandler = async (event: any) => {
    event.preventDefault();
    const geo = userFormController.injectGeo(lat, lng);
    const companyInfo: Company = userFormController.injectCompany(companyName, catchPhrase, bs);
    const address: Address = userFormController.injectAddress(street, suite, city, zipcode, geo);
    const userDto: UserDto = userFormController.injectUserDto(
      name,
      username,
      email,
      address,
      phone,
      website,
      companyInfo,
      props.userDto.id
    );
    const isValiduser = userFormController.validateUser(userDto);
    isValiduser && (await props.submitHandler(userDto));
    props.cleanFieldsAfterSubmit && cleanFields();
  };

  const deleteHandler = async (event: any) => {
    event.preventDefault();
    props.deleteHandler(userDto.id);
  };

  const buttonStyles = {
    margin: "10px 5px 10px 5px",
    cursor: "pointer",
    backgroundColor: props.enableEdit ? "#c5c5c5" : "",
  };

  const displayInputContent = (value: string, callbackFunciont: any, type: string = "text") => {
    const isDisplayBlock = props.display === "block";
    const inputToDisplayBlock = (
      <div>
        <input type={type} value={value} onChange={callbackFunciont} disabled={!props.enableEdit} />
      </div>
    );
    const inputToOthersDisplays = (
      <input type={type} value={value} onChange={callbackFunciont} disabled={!props.enableEdit} />
    );
    if (!props.enableEdit) {
      return <span>{value}</span>;
    }
    if (isDisplayBlock) {
      return inputToDisplayBlock;
    }
    return inputToOthersDisplays;
  };

  const displayIdField = () =>
    props.hasIdField && (
      <div>
        {" "}
        ID: <span>{userDto.id}</span>{" "}
      </div>
    );

  return (
    <form onSubmit={submiHandler}>
      <div
        className={`${classes["detail-container"]} ${
          props.enableEdit ? "" : classes["remove-all-styles"]
        }`}
      >
        <div className={classes.label}>USER INFO:</div>
        <div
          className={`${classes["first-block"]} ${classes.block}`}
          style={{ display: props.display }}
        >
          {displayIdField()}
          <div>
            <label>NAME:</label> {displayInputContent(name, nameHandleChange)}
          </div>
          <div>
            <label>USER NAME:</label> {displayInputContent(username, usernameHandleChange)}
          </div>
          <div>
            <label>E-MAIL:</label> {displayInputContent(email, emailHandleChange, "email")}
          </div>
          <div>
            <label>PHONE:</label>
            {displayInputContent(phone, phoneHandleChange)}
          </div>
          <div>
            <label>SUIT:</label>
            {displayInputContent(website, websiteHandleChange)}
          </div>
        </div>
        <div className={classes.label}>ADDRESS:</div>
        <div
          className={`${classes["second-block"]} ${classes.block}`}
          style={{ display: props.display }}
        >
          <div>
            <label>STREET:</label> {displayInputContent(street, streetHandleChange)}
          </div>
          <div>
            <label>SUIT:</label> {displayInputContent(suite, suiteHandleChange)}
          </div>
          <div>
            <label>CITY:</label> {displayInputContent(city, cityHandleChange)}
          </div>
          <div>
            <label>ZIPCODE:</label> {displayInputContent(zipcode, zipCodeHandleChange)}
          </div>
        </div>
        <div
          className={`${classes["second-sub-block"]} ${classes.block}`}
          style={{ display: props.display }}
        >
          <div className={"italic"}>
            <label>GEO:</label> (lat) {displayInputContent(lat, latCodeHandleChange)} (lng){" "}
            {displayInputContent(lng, lngCodeHandleChange)}
          </div>
        </div>
        <div className={classes.label}>BUSINESS INFO:</div>
        <div
          className={`${classes["third-block"]} ${classes.block}`}
          style={{ display: props.display }}
        >
          <div>
            <label>COMPANY:</label> {displayInputContent(companyName, companyNameCodeHandleChange)}
          </div>
          <div>
            <label>PHRASE:</label> {displayInputContent(catchPhrase, catchPhraseCodeHandleChange)}
          </div>
          <div>
            <label>BS:</label> {displayInputContent(bs, bsCodeHandleChange)}
          </div>
        </div>
      </div>
      <div className={classes["panel-buttons"]}>
        <button
          style={buttonStyles}
          onClick={editHandler}
          disabled={props.blockButtons}
          hidden={props.hideEditBtn}
        >
          EDIT
        </button>
        <input type="submit" value="SUBMIT" disabled={!props.enableEdit || props.blockButtons} />
        <button onClick={deleteHandler} disabled={props.blockButtons} hidden={props.hideDeleteBtn}>
          DELETE
        </button>
      </div>
    </form>
  );
};

export default UserForm;
