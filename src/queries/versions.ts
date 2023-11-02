import { useQuery } from '@tanstack/react-query';

import api from '@/services/api';
import type { Version } from '@/types/version';

/**
 * The function `getVersions` is an asynchronous function that retrieves an array
 * of `Version` objects from an API endpoint.
 * @returns The function `getVersions` is returning a Promise that resolves to an
 * array of `Version` objects.
 */
const getVersions = async (): Promise<Version[]> => {
  const { data } = await api.get<Version[]>('/api/versions');

  return data;
};

/**
 * The function `useFetchVersions` is a TypeScript function that uses the
 * `useQuery` hook to fetch versions using the `getVersions` function.
 * @returns The function `useFetchVersions` is returning the result of calling the
 * `useQuery` hook with the `queryKey` set to `['versions']` and the `queryFn` set
 * to `getVersions`.
 */
export default function useFetchVersions() {
  return useQuery({ queryKey: ['versions'], queryFn: getVersions });
}
