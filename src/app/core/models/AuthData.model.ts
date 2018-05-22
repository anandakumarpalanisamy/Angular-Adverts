import { UserModel } from "./profile.model";

export interface AuthData {
    token: string,
    user: UserModel
  }