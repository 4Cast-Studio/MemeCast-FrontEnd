import axios, { type AxiosResponse } from 'axios';

export type RequestConfig = {
  readonly params?: {
    readonly [key: string]: string | undefined;
  };
  readonly headers?: {
    readonly [key: string]: string | undefined;
  };
};

export type HttpClientConfig = {
  readonly url: string;
  readonly params?: {
    readonly [key: string]: string;
  };
  readonly headers?: {
    readonly [key: string]: string;
  };
};

export class HttpClient {
  public readonly config: HttpClientConfig;

  public constructor(config: HttpClientConfig) {
    this.config = config;
  }

  public async get<ResponseData>(relativeUrl: string, option = {} as RequestConfig): Promise<ResponseData> {
    const { data } = await axios.get<ResponseData, AxiosResponse<ResponseData>>(this.config.url + relativeUrl, this.augmentOption(option));

    return data;
  }

  public async post<ResponseData>(relativeUrl: string, body: unknown, option = {} as RequestConfig): Promise<ResponseData> {
    const { data } = await axios.post<ResponseData, AxiosResponse<ResponseData>>(this.config.url + relativeUrl, body, this.augmentOption(option));

    return data;
  }

  public async delete<ResponseData>(relativeUrl: string, option = {} as RequestConfig): Promise<ResponseData> {
    const { data } = await axios.delete<ResponseData, AxiosResponse<ResponseData>>(this.config.url + relativeUrl, this.augmentOption(option));

    return data;
  }

  private augmentOption(option: RequestConfig): RequestConfig {
    return {
      ...option,
      params: {
        ...this.config.params,
        ...option.params,
      },
      headers: {
        ...this.config.headers,
        ...option.headers,
      },
    };
  }
}
