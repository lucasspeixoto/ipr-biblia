import { useQuery } from '@tanstack/react-query';

import api from '@/services/api';
import type { Book } from '@/types/book';

/**
 * The function `getBooks` is an asynchronous function that retrieves a list of
 * books from an API.
 * @returns The function `getBooks` is returning a Promise that resolves to an
 * array of `Book` objects.
 */
const getBooks = async (): Promise<Book[]> => {
  const { data } = await api.get<Book[]>('/api/books');

  return data;
};

/**
 * The function `useFetchBooks` is a custom hook that uses the `useQuery` hook to
 * fetch a list of books.
 * @returns The function `useFetchBooks` is returning the result of calling the
 * `useQuery` hook with the `queryKey` set to `['books']` and the `queryFn` set to
 * `getBooks`.
 */
export default function useFetchBooks() {
  return useQuery({ queryKey: ['books'], queryFn: getBooks });
}
