import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { title,description, date} = req.body;

      if (!title|| !description || !date) {
        return res.status(400).json({ error: "All fields must be filled out." });
      }

      const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      await client.connect();
      const database = client.db("announcements_db");
      const collection = database.collection("announcements_collection");

      const result = await collection.insertOne({
        title,
        description,
        date,
      });

      await client.close();

      res.status(201).json({ message: "Annoucement created successfully!", result });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "Unable to save data to database" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
