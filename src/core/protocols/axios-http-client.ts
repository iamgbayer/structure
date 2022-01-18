import axios, { AxiosResponse } from "axios";
import { injectable } from "inversify";
import { HttpClient, HttpRequest, HttpResponse } from "./http-client";

@injectable()
export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        baseURL: "https://demo9908164.mockable.io/",
        url: data.url,
        method: data.method,
        data: data.body,
        params: data.params,
        headers: data.headers,
        onUploadProgress: data.onUploadProgress,
        withCredentials: data.withCredentials
      });
    } catch (error) {
      axiosResponse = error as AxiosResponse;
    }
    return {
      statusCode: axiosResponse.status,
      data: axiosResponse.data
    };
  }
}
