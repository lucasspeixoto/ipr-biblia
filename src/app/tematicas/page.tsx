import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <Image src="/coming-soon.svg" alt="Em breve" width={300} height={200} />
      <div className="my-4 text-xl text-black dark:text-white">Em breve</div>
    </div>
  );
}
