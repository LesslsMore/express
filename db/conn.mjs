import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_URL || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

const db_bili = conn.db("bili");
const db_json = conn.db("json");
const tb_cids = db_bili.collection('cids')
const tb_vlist = db_bili.collection('vlist')

const mids = [37974444, 302417610]

const tb_bvids = db_json.collection('bvids')

let tb_pages = []

mids.forEach(mid => {
  tb_pages.push(db_json.collection(`pages[${mid}]`))
})

export {
  tb_cids,
  tb_vlist,
  tb_bvids,
  tb_pages,
};
