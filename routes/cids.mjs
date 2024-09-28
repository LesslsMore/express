import express from "express";
import { ObjectId } from "mongodb";
import {get_cids_items} from "../service/cids.mjs";

const router = express.Router();

// Get a list of 50 posts
router.get("/", async (req, res) => {
  const obj = await get_cids_items(req.body)
  res.send(obj).status(200);
});

router.post("/", async (req, res) => {
  const obj = await get_cids_items(req.body)
  res.send(obj).status(200);
});

export default router;
