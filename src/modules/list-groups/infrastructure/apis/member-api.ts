import { IMemberApi } from "../../domain/apis";
import { UnexpectedException, HttpClient, HttpStatusCode } from "core";
import { inject, injectable } from "inversify";
import INJECTABLES from "injectables";

@injectable()
export class MemberApi implements IMemberApi {
  public constructor(
    @inject(INJECTABLES.HttpClient) private readonly httpClient: HttpClient
  ) {}

  public async list() {
    const response = await this.httpClient.request({
      url: "members",
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
