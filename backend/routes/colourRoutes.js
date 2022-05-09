const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

router.get("/", async (req, res) => {
  let dbArray = null;
  try {
    await client.connect();
    dbArray = await client
      .db("coloursNameReact")
      .collection("colours")
      .find()
      .toArray();
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
  res.status(200).json(dbArray);
});


module.exports = router;
