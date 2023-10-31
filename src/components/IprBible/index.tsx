import { Divider } from '@nextui-org/react';

import Books from './Books';
import Chapters from './Chapters';
import ReadableVerses from './ReadbleVerses';

const IprBible: React.FC = () => {
  return (
    <>
      {/* Listagem de Livros e capítulos do livro selecionado */}
      <div className="max-h-5/6 h-auto w-full flex-none overflow-y-auto p-2 md:h-full md:w-80">
        <Books />
        <Chapters />
      </div>

      <Divider
        orientation="vertical"
        className="border-6 mx-4 hidden h-full md:block"
      />

      {/* Versos */}
      <div className="h-auto w-full grow-0 p-2 md:h-full md:grow">
        <ReadableVerses />
      </div>
    </>
  );
};

export default IprBible;
