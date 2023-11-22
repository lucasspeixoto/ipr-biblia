import Image from 'next/image';

export default function TematicsPage() {
  return (
    <>
      <Image
        src="/images/coming-soon.svg"
        alt="Em breve"
        width={300}
        height={200}
      />
      <div className="my-4 text-xl text-black dark:text-white">Em breve</div>
    </>
  );
}
