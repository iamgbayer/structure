import { Member } from "../vos";

export interface IMemberApi {
  list(): Promise<Member[]>;
}
