const express = require('express');
const {get_cids_items, run} = require("./mongo");

const app = express();
app.use(express.json())
const cors = require('cors')
app.use(cors())

app.post('/cids', async function (req, res) {
    const tb_cids = await run()
    const obj = await get_cids_items(tb_cids, req.body)

    res.send(obj);
})

app.get('/cids', async function (req, res) {
    // const {part} = req.body
    // const items = await get_cids_items(tb_cids, part)
    res.send("items");
})

const server = app.listen(8964, function () {

    const host = server.address().address
    const port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
