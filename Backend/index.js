import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ quiet: true });
import { ObjectId } from "mongodb";

const app = express();

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ub1fi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const userCollection = client.db("PUComputerClub").collection("userData");
    const notesCollection = client.db("PUComputerClub").collection("notes")
    //register
    app.post("/register", async (req, res) => {
      const userInfo = req.body;
      const result = await userCollection.insertOne(userInfo);
      res.send(result);
    });

    // login
    app.post("/login", async (req, res) => {
      const { email, password } = req.body;
      const result = await userCollection.findOne({ email, password });
      if (!result) {
        return res.json({
          success: false,
          message: "Email or Password Invalid",
        });
      }
      res.json({
        success: true,
        message: "Login successful",
        user: result,
      });
    });

    // add notes
    app.post("/notes", async (req, res)=>{
      const notes = req.body;
      const result = await notesCollection.insertOne(notes);
      res.send(result);
    })

    // get notes
    app.get("/notes", async (req, res)=>{
      const result = await notesCollection.find().toArray();
      res.send(result);
    })


    // DELETE note
    app.delete("/notes/:id", async (req, res) => {
      const id = req.params.id;
      await notesCollection.deleteOne({ _id: new ObjectId(id) });
      res.json({ message: "Note deleted successfully" });
    });

    app.put("/notes/:id", async (req, res) => {
      const id = req.params.id;
      const { title, description } = req.body;

      await notesCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { title, description } }
      );

      res.json({ message: "Note updated successfully" });
    });


    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("backend in running");
});

app.listen(5000, (req, res) => {
  console.log("server is running");
});
