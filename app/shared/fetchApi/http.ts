import { RequestInit, Response } from 'node-fetch';
import { fetchApi } from '.';

type HttpResponse<T> = {
  data: T;
  error: {
    message: string;
    errorCode: string;
  } | null;
};
export class Http {
  private static handleError(error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(JSON.stringify(error.message));
    }
    return Promise.reject(error);
  }

  private static async handleResponse<T>(
    response: Response
  ): Promise<HttpResponse<T>> {
    if (response.ok) {
      const res = await response.json();
      return { data: res, error: null };
    }
    const errorResponse = await response.json();
    console.log(errorResponse);
    return {
      data: {} as T,
      error: errorResponse,
    };
  }

  static async get<T>({
    endpoint,
  }: {
    endpoint: string;
  }): Promise<HttpResponse<T>> {
    try {
      const response = await fetchApi(endpoint, {
        method: 'GET',
      });
      return await Http.handleResponse<T>(response);
    } catch (error) {
      return Http.handleError(error);
    }
  }

  static async post<T>({
    endpoint,
    body,
  }: {
    endpoint: string;
    body: RequestInit['body'];
  }): Promise<HttpResponse<T>> {
    try {
      const response = await fetchApi(endpoint, {
        body: body,
        method: 'POST',
      });

      return await Http.handleResponse<T>(response);
    } catch (error) {
      console.log(error);
      return Http.handleError(error);
    }
  }
}
