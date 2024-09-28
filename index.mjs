import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import cids from "./routes/cids.mjs";
import bvids from "./routes/bvids.mjs";
import pages from "./routes/pages.mjs";
import vlist from "./routes/vlist.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /cids routes


app.use("/pages", pages);
app.use('/vlist', vlist);
app.use("/bvids", bvids);
app.use("/cids", cids);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
