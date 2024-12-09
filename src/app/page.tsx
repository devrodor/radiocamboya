import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-8xl">radiocamboya</h1>
       
        <ol className="list-inside ltext-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Un podcast sobre música, cine, literatura
         
          </li>
          <li>Un espacio donde compartir recetas de croquetas</li>
        </ol>

        <div className="container mx-auto">
            <iframe className="w-full aspect-video" src="https://www.ivoox.com/player_ej_113677374_6_1.html?c1=444444" loading="lazy"></iframe>
          </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
        
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          2025 Radiocamboya
       
      </footer>
    </div>
  );
}
