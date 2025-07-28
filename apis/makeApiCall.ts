import { AxiosError, AxiosResponse, Method } from 'axios';
import apiClient from './apiClient';
import { ResponseData } from '@/types/apis';

export const makeApiCall = async <T>(
  endpoint: string,
  method: Method = 'GET',
  payload?: object
): Promise<ResponseData<T>> => {
  try {
    const response: AxiosResponse<T> = await apiClient.request<T>({
      url: endpoint,
      method,
      data: payload,
    });

    return {
      data: response.data,
      status: response.status,
      statusMessage: response.statusText,
    };
  } catch (err) {
    const error = err as AxiosError;
    return {
      data: {} as T,
      status: error.response?.status || 500,
      statusMessage: error.response?.statusText || 'Unknown Error',
      errorMessage: error.message,
    };
  }
};
