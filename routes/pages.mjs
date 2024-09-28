import express from "express";
import { ObjectId } from "mongodb";
import {pages2vlist} from "../service/pages.mjs";

const router = express.Router();

// Get a list of 50 posts
router.get("/", async (req, res) => {
  res.send().status(200);
});

router.post("/import", async (req, res) => {
  res.send().status(200);
});

router.post('/2vlist', async (req, res) => {
  const obj = await pages2vlist()
  res.send(obj).status(200);
})

export default router;
