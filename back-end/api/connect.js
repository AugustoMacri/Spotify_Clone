import { MongoClient } from "mongodb";

const URI = "mongodb+srv://augustomacri:My6FpukTuOk6aJYZ@cluster0.lx5ox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula")
//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);