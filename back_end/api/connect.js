import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://David_Evangelist:3LClAoRhU2YRS1Vb@cluster0.roffu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyHashtag");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
