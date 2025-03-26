import Image from "next/image";
import ServerButtonWrapper from "./components/server-button-wrapper";
import NavBar from "@/components/navbar/NavBar";
export default function PromiseModalPage() {
  const configIds = [1, 2, 3, 4, 5];
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <ServerButtonWrapper configIds={configIds} />
        </main>
      </div>
    </div>
  );
}
