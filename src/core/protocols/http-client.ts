export type HttpRequest<T = any> = {
  url: string;
  method: HttpMethod;
  body?: T;
  params?: T;
  headers?: any;
  onUploadProgress?: (progressEvent: ProgressEvent) => void;
  withCredentials?: boolean;
};

export interface HttpClient<R = any> {
  request(data: HttpRequest): Promise<HttpResponse<R>>;
}

export type HttpMethod = "post" | "get" | "put" | "patch" | "delete";

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  accepted = 202,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  unprocessableEntity = 422,
  serverError = 500
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  data?: T;
};
