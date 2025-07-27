import { model, models, Schema } from "mongoose";

const SongSchema = new Schema(
  {
    name: String,
    autor: String,
    lyrics: String,
  },
  { collection: "song" }
);

export const Song = models.Song || model("Song", SongSchema);
