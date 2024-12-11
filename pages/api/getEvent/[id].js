import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { id } = req.query;

  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("events_db");
    const collection = database.collection("events_collection");

    const event = await collection.findOne({ _id: ObjectId.createFromHexString(id)});

    if (!event) {
      res.status(404).json({ message: "Event not found!" });
    } else {
      res.status(200).json(event);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  } finally {
    await client.close();
  }
}
