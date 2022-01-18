import { Container } from "inversify";
import INJECTABLES from "injectables";
import { AxiosHttpClient, HttpClient } from "core";
import { MemberApi, GroupApi } from "./modules/list-groups/infrastructure/apis";
import { IGroupApi, IMemberApi } from "./modules/list-groups/domain/apis";

const container = new Container();

container.bind<HttpClient>(INJECTABLES.HttpClient).to(AxiosHttpClient);
container.bind<IMemberApi>(INJECTABLES.MemberApi).to(MemberApi);
container.bind<IGroupApi>(INJECTABLES.GroupApi).to(GroupApi);

export default container;
