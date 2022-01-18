import { inject } from "inversify";
import { IGroupApi, IMemberApi } from "../domain/apis";
import INJECTABLES from "../../../types";

export class ListMemberGroups {
  public constructor(
    @inject(INJECTABLES.GroupApi) private readonly groupApi: IGroupApi,
    @inject(INJECTABLES.MemberApi) private readonly memberApi: IMemberApi
  ) {}

  public async execute() {
    const groups = await this.groupApi.list();
    const members = await this.memberApi.list();

    return groups.map((group) => ({
      ...group,
      members
    }));
  }
}
