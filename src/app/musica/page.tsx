import React from "react";
import Link from "next/link";
import Music from "@/components/Music";

export default function page() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 md:p-10 bg-[#fca34d]">
      <section className="border-2 rounded-lg w-full max-w-sm md:max-w-4xl p-4 md:p-10 space-y-4 md:space-y-6 bg-[#90EAE9]">
        <header className="text-center space-y-1">
          <h1>Music Player</h1>
        </header>
        <nav className="w-full flex items-center justify-between bg-green-200 px-8 py-4">
          <Link href="/" className="cursor-pointer px-3 py-1">
            Todo
          </Link>
          <Link href="/musica" className="cursor-pointer">
            Musica
          </Link>
          <Link href="/playlists" className="cursor-pointer">
            Playlists
          </Link>
          <Link href="/crear-cancion" className="cursor-pointer">
            Crear-Cancion
          </Link>
        </nav>
        <Music />
      </section>
    </main>
  );
}
