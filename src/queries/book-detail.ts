import api from '@services/api';
import type { QueryFunctionContext } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import type { Book } from '@/types/book';

/**
 * The function `getBookDetail` is an asynchronous function that retrieves the
 * details of a book using a provided book ID.
 * @param {QueryFunctionContext} ctx - The `ctx` parameter is of type
 * `QueryFunctionContext`. It is an object that contains information about the
 * query being executed, such as the query key and other query-related data. In
 * this case, the `ctx` parameter is used to extract the `book` value from the
 * query key.
 * @returns The function `getBookDetail` is returning a Promise that resolves to a
 * `Book` object.
 */
const getBookDetail = async (ctx: QueryFunctionContext): Promise<Book> => {
  const [, book] = ctx.queryKey;

  const { data } = await api.get<Book>(`/books/${book}`);

  return data;
};

/**
 * The function `useFetchBookDetail` is a custom hook that uses the `useQuery` hook
 * from a library to fetch book details based on a given book parameter.
 * @param {string | null} book - The `book` parameter is a string or null value
 * that represents the book to fetch the details for.
 * @returns the result of the `useQuery` hook.
 */
export default function useFetchBookDetail(book: string | null) {
  return useQuery({
    queryKey: ['books', book],
    queryFn: getBookDetail,
    enabled: false,
  });
}
