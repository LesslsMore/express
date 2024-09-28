import express from "express";
import { ObjectId } from "mongodb";
import {bvids2cids} from "../service/bvids.mjs";

const router = express.Router();

// Get a list of 50 posts
router.get("/", async (req, res) => {
  res.send().status(200);
});

router.post("/import", async (req, res) => {
  res.send().status(200);
});

router.post('/2cids', async (req, res) => {
  const obj = await bvids2cids()
  res.send(obj).status(200);
})

export default router;
