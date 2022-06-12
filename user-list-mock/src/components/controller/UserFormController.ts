import { Address, Company, Geo, UserDto } from "../../services/interfaces/dto/UserDto";

export class UserFormController {
  public injectCompany = (name: string, catchPhrase: string, bs: string): Company => ({
    name,
    catchPhrase,
    bs,
  });

  public injectGeo = (lat: string, lng: string): Geo => ({
    lat,
    lng,
  });

  public injectAddress = (
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
  ): Address => ({
    street,
    suite,
    city,
    zipcode,
    geo,
  });

  public injectUserDto = (
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company,
    id?: string
  ): UserDto => ({
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
  });

  public validateUser = (UserDto: UserDto): boolean => {
    // TODO: check the fields to send to backend
    console.debug("Validate user");
    return true;
  };
}
