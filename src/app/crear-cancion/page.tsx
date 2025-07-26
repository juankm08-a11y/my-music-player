"use client";
import React, { useState } from "react";

export default function Page() {
  const [namesong, setNameSong] = useState("");
  const [autor, setAutor] = useState("");
  const [url, setUrl] = useState("");

  const handleChangeSong = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameSong(e.target.value);
  };

  const handleChangeAutor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutor(e.target.value);
  };

  const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = () => {
    alert("Su cancion se guardo correctamente");
  };
  return (
    <main className="flex justify-center items-center bg-amber-200">
      <section className="flex flex-col gap-20 p-20 items-center border-2 w-full h-full">
        <h1 className="text-2xl font-bold">Crear una cancion</h1>
        <label>
          Nombre de la Cancion:
          <input
            onChange={handleChangeSong}
            value={namesong}
            type="text"
            placeholder="Ingresa el nombre de una cancion"
            className="w-[260px] p-1 border-1"
          />
        </label>
        <label>
          Autor:
          <input
            value={autor}
            onChange={handleChangeAutor}
            type="text"
            placeholder="Ingresa el nombre del autor"
            className="w-[260px] p-1 border-1"
          />
        </label>
        <label>
          Url:
          <input
            value={url}
            onChange={handleChangeUrl}
            type="text"
            placeholder="Ingresa la url de la cancion"
            className="w-[260px] p-1 border-1"
          />
        </label>
        <button onClick={handleSubmit} className="border-1">
          Crear cancion
        </button>
      </section>
    </main>
  );
}
