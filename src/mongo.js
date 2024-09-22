require('dotenv').config()

const { MongoClient, ServerApiVersion } = require('mongodb');
// console.log(process.env)
const uri = process.env.MONGO_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function get_cids_items(tb_cids, body) {
    let {part, page, limit} = body
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
    const skip = (page - 1) * limit;


    const query = {'part.text': {$regex: new RegExp(part, 'i')}}
    const options = {
        sort: {'view': -1}
    }
    const items = await tb_cids.find(query, options).toArray()
    // console.log(items)
    const data = items.slice(skip, skip + limit)
    return {
        data,
        total: items.length
    }
}

async function run() {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db_bili = client.db('bili')
    const tb_cids = db_bili.collection('cids')
    // await get_cids_items(tb_cids);
    return tb_cids
}
// run().catch(console.dir);

async function main() {
    const part = 'express'
    const tb_cids = await run()
    const items = await get_cids_items(tb_cids, part)
    console.log(items)
}

// main()

module.exports = {get_cids_items, run}
