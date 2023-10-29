'use client';

import useSelectedBook from '@store/useSelectedBook';
import React from 'react';

const ReadableVerses: React.FC = () => {
  const selectedVerseStore = useSelectedBook((state) => state.verse);

  const selectedBookAbbrev = useSelectedBook((state) => state.bookAbbrev);

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-2">
      <div>Selected Book Abbrev.: {selectedBookAbbrev}</div>
      <div>Selected Verse: {selectedVerseStore}</div>
    </div>
  );
};

export default ReadableVerses;
