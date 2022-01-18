import { IGroupApi } from "../../domain/apis";
import { UnexpectedException, HttpClient, HttpStatusCode } from "core";
import { inject, injectable } from "inversify";
import INJECTABLES from "injectables";

@injectable()
export class GroupApi implements IGroupApi {
  public constructor(
    @inject(INJECTABLES.HttpClient) private readonly httpClient: HttpClient
  ) {}

  public async list() {
    const response = await this.httpClient.request({
      url: "groups",
      method: "get"
    });

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.data;
      default:
        throw new UnexpectedException();
    }
  }
}
