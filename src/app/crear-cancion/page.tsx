"use client";
import React, { useState } from "react";

export default function Page() {
  const [song, setSong] = useState({ name: "", autor: "", lyrics: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/song", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(song),
      });

      if (res.ok) {
        alert("Cancion creada");
        setSong({ name: "", autor: "", lyrics: "" });
      } else {
        alert("Error al guardar");
      }
    } catch (error) {
      console.error("Error al enviar", error);
    }
  };

  return (
    <main className="flex justify-center items-center bg-amber-200">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-20 p-20 items-center border-2 w-full h-full"
      >
        <h1 className="text-2xl font-bold">Crear una cancion</h1>
        <label>
          Nombre de la Cancion:
          <input
            name="name"
            value={song.name}
            onChange={handleChange}
            type="text"
            placeholder="Ingresa el nombre de una cancion"
            className="w-[260px] p-1 border-1"
          />
        </label>
        <label>
          Autor:
          <input
            name="autor"
            value={song.autor}
            onChange={handleChange}
            type="text"
            placeholder="Ingresa el nombre del autor"
            className="w-[260px] p-1 border-1"
          />
        </label>
        <label>
          Letra de la Cancion:
          <input
            name="lyrics"
            value={song.lyrics}
            onChange={handleChange}
            type="text"
            placeholder="Ingresa la letra de la cancion"
            className="w-[260px] p-1 border-1"
          />
        </label>
        <button type="submit" className="border-1">
          Crear cancion
        </button>
      </form>
    </main>
  );
}
