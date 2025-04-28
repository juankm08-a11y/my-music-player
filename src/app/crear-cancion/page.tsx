"use client";
import React, { useState } from "react";

export default function page() {
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
    <main className="flex justify-center items-center">
      <section className="flex flex-col items-center border-2 w-full h-full">
        <h1>Crear una cancion</h1>
        <label>
          Nombre Cancion:
          <input
            onChange={handleChangeSong}
            value={namesong}
            type="text"
            placeholder="ingresa el nombre de una cancion"
          />
        </label>
        <label>
          Autor:
          <input
            value={autor}
            onChange={handleChangeAutor}
            type="text"
            placeholder="ingresa el nombre del autor"
          />
        </label>
        <label>
          Url:
          <input
            value={url}
            onChange={handleChangeUrl}
            type="text"
            placeholder="ingresa la url de la cancion"
          />
        </label>
        <button onClick={handleSubmit}>Crear cancion</button>
      </section>
    </main>
  );
}
