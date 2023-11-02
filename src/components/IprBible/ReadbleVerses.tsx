'use client';

import React from 'react';

import useFetchVersesByBook from '@/queries/verses';
import useSelectedBook from '@/store/useSelectedBook';
import useSelectedVersion from '@/store/useSelectedVersion';

import LoadingPage from '../LoadingPage';
import Versions from './Versions';

const ReadableVerses: React.FC = () => {
  const selectedBookAbbrev = useSelectedBook((state) => state.bookAbbrev);

  const selectedVerseStore = useSelectedBook((state) => state.verse);

  const selectedVersionStore = useSelectedVersion((state) => state.version);

  const { data, isFetching, refetch } = useFetchVersesByBook(
    selectedVersionStore,
    selectedBookAbbrev,
    selectedVerseStore,
  );

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  /* The `React.useEffect` hook is used to perform side effects in a functional
  component. In this case, it is used to fetch verses based on the selected book
  abbreviation and verse from the server. */
  React.useEffect(() => {
    let mounted = true;

    if (
      selectedVersionStore &&
      selectedBookAbbrev &&
      selectedVerseStore &&
      mounted
    ) {
      refetch();
    }

    return () => {
      mounted = false;
    };
  }, [refetch, selectedBookAbbrev, selectedVerseStore, selectedVersionStore]);

  if (isFetching) return <LoadingPage />;

  return (
    <>
      {isClient ? (
        <>
          <Versions />
          <div className="flex flex-col">
            <span className="text-3xl font-bold">
              {data?.book.name} {selectedVerseStore}
            </span>

            <div className="mx-0 mt-6 flex flex-col items-center justify-center gap-4 md:mx-4">
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
        </>
      ) : null}
    </>
  );
};

export default ReadableVerses;
