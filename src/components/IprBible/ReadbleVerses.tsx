'use client';

import React from 'react';

import useFetchVersesByBook from '@/queries/verses';
import useSelectedBook from '@/store/useSelectedBook';

import LoadingPage from '../LoadingPage';

const ReadableVerses: React.FC = () => {
  const selectedBookAbbrev = useSelectedBook((state) => state.bookAbbrev);

  const selectedVerseStore = useSelectedBook((state) => state.verse);

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const { data, isFetching, refetch } = useFetchVersesByBook(
    selectedBookAbbrev,
    selectedVerseStore,
  );

  /* The `React.useEffect` hook is used to perform side effects in a functional
  component. In this case, it is used to fetch verses based on the selected book
  abbreviation and verse from the server. */
  React.useEffect(() => {
    let mounted = true;

    if (selectedBookAbbrev && selectedVerseStore && mounted) refetch();

    return () => {
      mounted = false;
    };
  }, [refetch, selectedBookAbbrev, selectedVerseStore]);

  if (isFetching) return <LoadingPage />;

  return (
    <>
      {isClient ? (
        <div className="flex flex-col">
          <span className="text-3xl font-bold">
            {data?.book.name} {selectedVerseStore}
          </span>

          <div className="mx-4 mt-6 flex flex-col items-center justify-center gap-4">
            {data?.verses.map((verse) => (
              <p className="text-center" key={verse.number}>
                <span className="mr-2 font-bold italic text-primary">
                  {verse.number}.
                </span>
                {verse.text}
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ReadableVerses;
