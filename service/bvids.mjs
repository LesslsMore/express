import {tb_bvids, tb_cids} from "../db/conn.mjs";
import {bvid2cids} from "../utils/bili.mjs";

async function bvids2cids() {
    console.log('bvids2cids...')
    console.log(new Date())
    let bvids = await tb_bvids.find({}).toArray()
    // console.log(bvids)
    for (let {json_obj} of bvids) {
        // console.log(json_obj)
        // console.log(db_bili)
        let cids = bvid2cids(json_obj)
        console.log(`每 bvid 下 cid 数: ${cids.length}`)
        await tb_cids.insertMany(cids)
    }
    console.log(new Date())
}

export {
    bvids2cids,
};
