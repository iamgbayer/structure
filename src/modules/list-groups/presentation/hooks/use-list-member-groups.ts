import { useQuery } from "react-query";
import { ListMemberGroups } from "../../usecases/list-member-groups";
import container from "container";
import INJECTABLES from "injectables";
import { IGroupApi, IMemberApi } from "../../domain/apis";

export const useListMemberGroups = () => {
  return useQuery([], () =>
    new ListMemberGroups(
      container.get<IGroupApi>(INJECTABLES.GroupApi),
      container.get<IMemberApi>(INJECTABLES.MemberApi)
    ).execute()
  );
};
