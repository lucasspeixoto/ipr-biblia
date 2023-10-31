import type { QueryFunctionContext } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import api from '@/services/api';
import type { VerseByBookResponse } from '@/types/verse-by-book-response';

/**
 * The function `getVersesByBook` retrieves verses from a specific book and verse
 * using an API.
 * @param {QueryFunctionContext} ctx - The `ctx` parameter is of type
 * `QueryFunctionContext`. It is an object that contains information about the
 * query being executed, such as the query key and other query-related data.
 * @returns a Promise that resolves to a VerseByBookResponse object.
 */
const getVersesByBook = async (
  ctx: QueryFunctionContext,
): Promise<VerseByBookResponse> => {
  const [, bookAbbrev, verse] = ctx.queryKey;

  const { data } = await api.get<VerseByBookResponse>(
    `/api/verses/acf/${bookAbbrev}/${verse}`,
  );

  return data;
};

/**
 * The function `useFetchVersesByBook` is a TypeScript function that uses the
 * `useQuery` hook to fetch verses by book abbreviation and verse number.
 * @param {string | null} bookAbbrev - A string representing the abbreviation of a
 * book in the Bible.
 * @param {number | null} verse - The `verse` parameter is the number of the
 * specific verse you want to fetch. It can be `null` if you want to fetch all
 * verses in the book.
 * @returns the result of the `useQuery` hook.
 */
export default function useFetchVersesByBook(
  bookAbbrev: string | null,
  verse: number | null,
) {
  return useQuery({
    queryKey: ['api/verses/acf', bookAbbrev, verse],
    queryFn: getVersesByBook,
    enabled: false,
  });
}
