import {UserRoles} from "./infosUserModel";

export interface RegisterData {
  name: string;
  surname: string;
  email: string;
  password: string;
  birthdate: string;
  medId?: string;
  category: UserRoles;
}
