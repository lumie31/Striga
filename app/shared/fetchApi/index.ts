import { calculateSignature } from '../utils/createSig';
import fetch, { RequestInit } from 'node-fetch';

export const fetchApi = async (endpoint: string, config: RequestInit) => {
  const STRIGA_API_KEY = process.env.NEXT_PUBLIC_STRIGA_API_KEY;
  const headers = {
    Authorization:
      calculateSignature(
        (config.body as string) ?? '{}',
        config.method ?? 'GET',
        endpoint
      ) ?? '',
    'api-key': STRIGA_API_KEY ?? '',
    accept: 'application/json',
    'content-type': 'application/json',
  };
  config = {
    ...config,
    headers,
  };

  const uri = `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`;
  return await fetch(uri, config);
};
