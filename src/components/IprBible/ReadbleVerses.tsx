'use client';

import { Pagination } from '@nextui-org/react';
import React from 'react';

import useFetchVersesByBook from '@/queries/verses';
import useSelectedBook from '@/store/useSelectedBook';
import useSelectedVersion from '@/store/useSelectedVersion';

import LoadingPage from '../LoadingPage';

const ReadableVerses: React.FC = () => {
  const selectedBookAbbrev = useSelectedBook((state) => state.bookAbbrev);

  const selectedChaptersStore = useSelectedBook((state) => state.chapters);

  const selectedVerseStore = useSelectedBook((state) => state.verse);

  const selectedVersionStore = useSelectedVersion((state) => state.version);

  const setSelectedVerse = useSelectedBook((state) => state.setSelectedVerse);

  /* The `const setSelectedVerseHandle` is a callback function that is created
  using the `useCallback` hook. It takes a `verse` parameter of type number and
  calls the `setSelectedVerse` function with the `verse` parameter as its
  argument. */
  const setSelectedVerseHandle = React.useCallback((verse: number) => {
    setSelectedVerse(verse);
  }, []);

  const { data, isFetching, refetch } = useFetchVersesByBook(
    selectedVersionStore,
    selectedBookAbbrev,
    selectedVerseStore,
  );

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

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
          <div className="flex flex-col">
            <span id="startReadingPosition" className="text-3xl font-bold">
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

            <div className="my-10 flex w-full items-center justify-center gap-8">
              <Pagination
                loop
                showControls
                color="primary"
                variant="light"
                total={selectedChaptersStore!}
                initialPage={selectedVerseStore!}
                onChange={setSelectedVerseHandle}
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ReadableVerses;
