const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@firstcluster.3g9daa6.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const placeCollection = client.db("theAdventurer").collection("services");
    const reviewCollection = client.db("theAdventurer").collection("reviews");
    const exploreCollection = client.db("theAdventurer").collection("explore");

    app.get("/services", async (req, res) => {
      const query = {};
      const cursor = placeCollection.find(query);
      const places = await cursor.toArray();
      const latestData = [
        places[places.length - 1],
        places[places.length - 2],
        places[places.length - 3],
      ];
      res.send(latestData);
    });

    app.get("/allservices", async (req, res) => {
      const query = {};
      const cursor = placeCollection.find(query);
      const places = await cursor.toArray();
      res.send(places);
    });

    app.get("/explore", async (req, res) => {
      const query = {};
      const cursor = exploreCollection.find(query);
      const morePlaces = await cursor.toArray();
      res.send(morePlaces);
    });

    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const place = await placeCollection.findOne(query);
      res.send(place);
    });

    app.post("/service", async (req, res) => {
      const addService = req.body;
      const result = await placeCollection.insertOne(addService);
      res.send(result);
    });

    app.post("/review", async (req, res) => {
      const addReview = req.body;
      const result = await reviewCollection.insertOne(addReview);
      res.send(result);
    });

    app.get("/review/:id", async (req, res) => {
      const id = req.params.id;
      const query = { reviewItemID: id };
      const cursor = reviewCollection.find(query);
      const review = await cursor.toArray();
      res.send(review);
    });

    app.get("/onereview/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const oneReview = await reviewCollection.findOne(query);
      res.send(oneReview);
      // console.log(oneReview);
    });

    app.get("/review", async (req, res) => {
      if (req.query.email) {
        query = {
          reviewerEmail: req.query.email,
        };
      }
      const cursor = reviewCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.delete("/review/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await reviewCollection.deleteOne(query);
      res.send(result);
    });

    app.patch("/review/:id", async (req, res) => {
      const id = req.params.id;
      const opinion = req.body.opinion;
      const query = { _id: ObjectId(id) };
      const updateOpinion = {
        $set: {
          opinion: opinion,
        },
      };
      const result = await reviewCollection.updateOne(query, updateOpinion);
      res.send(result);
    });
  } finally {
  }
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("The Adventurer server is running");
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
