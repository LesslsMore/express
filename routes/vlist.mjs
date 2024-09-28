import express from "express";
import { ObjectId } from "mongodb";
import {vlist2bvids} from "../service/vlist.mjs";

const router = express.Router();

// Get a list of 50 posts
router.get("/", async (req, res) => {
  res.send().status(200);
});

router.post("/import", async (req, res) => {
  res.send().status(200);
});

router.post('/2bvids', async (req, res) => {
  const obj = await vlist2bvids()
  res.send(obj).status(200);
})

export default router;
