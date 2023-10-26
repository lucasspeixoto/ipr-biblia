import { Divider } from '@nextui-org/react';

import BooksAndVerses from '../BooksAndVerses';

const IprBible = () => {
  return (
    <>
      {/* Seleção */}
      <div className="max-h-5/6 h-auto w-full flex-none overflow-y-auto border-2 border-red-600 p-2 md:h-full md:w-80">
        <BooksAndVerses />
      </div>

      <Divider
        orientation="vertical"
        className="border-6 mx-4 hidden h-full md:block"
      />

      {/* Seleção */}
      <div className="h-auto w-full grow-0 border-2 border-green-600 p-2 md:h-full md:grow">
        Versículos
      </div>
    </>
  );
};

export default IprBible;
