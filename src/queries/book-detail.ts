import type { QueryFunctionContext } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import api from '@/services/api';
import type { Book } from '@/types/book';

const getBookDetail = async (ctx: QueryFunctionContext): Promise<Book> => {
  const [, book] = ctx.queryKey;

  const { data } = await api.get<Book>(`/books/${book}`);

  return data;
};

export default function useFetchBookDetail(book: string | null) {
  return useQuery({
    queryKey: ['books', book],
    queryFn: getBookDetail,
    enabled: false,
  });
}
