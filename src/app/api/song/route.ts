import { connectToDB } from "@/app/lib/mongodb";
import { Song } from "@/models/Song";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, autor, lyrics } = await req.json();

    await connectToDB();

    const newSong = new Song({ name, autor, lyrics });
    await newSong.save();

    return NextResponse.json(
      { message: "Cancion guardada correctamente." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en API /song:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
