import IprBible from '@/components/IprBible';

export default function Home() {
  return (
    <div className="flex h-auto flex-col items-start gap-0.5 md:h-screen md:flex-row">
      <IprBible />
    </div>
  );
}
