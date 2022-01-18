import { Group } from "../vos";

export interface IGroupApi {
  list(): Promise<Group[]>;
}
