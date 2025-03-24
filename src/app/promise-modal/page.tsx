import Image from "next/image";
import ServerButtonWrapper from "./components/server-button-wrapper";

export default function Home() {
  const configIds = [1, 2, 3, 4, 5];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ServerButtonWrapper configIds={configIds} />
      </main>
    </div>
  );
}
