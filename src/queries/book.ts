import { useQuery } from '@tanstack/react-query';

import api from '@/services/api';
import type { Book } from '@/types/book';

const getBooks = async (): Promise<Book[]> => {
  const { data } = await api.get<Book[]>('/books');

  return data;
};

export default function useFetchBooks() {
  return useQuery({ queryKey: ['books'], queryFn: getBooks });
}
