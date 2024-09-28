import {tb_bvids, tb_vlist} from "../db/conn.mjs";
async function vlist2bvids() {
    console.log('vlist2bvids...')
    console.log(new Date())
    let new_bvids = await tb_vlist.find({}, {projection: { bvid: 1, _id: 0 } })
        .sort({ bvid: 1 })
        .toArray()

    let old_bvids = await tb_bvids.find({}, { projection: { bvid: 1, _id: 0 } })
        .sort({ bvid: 1 })
        .toArray();

    new_bvids = new_bvids.map(item => item.bvid)
    old_bvids = old_bvids.map(item => item.bvid)

    // console.log(new_bvids)
    // console.log(old_bvids)
    const bvids = new_bvids.filter(item => !old_bvids.includes(item));
    console.log(bvids.length)
    console.log('bvids: ', bvids)
    for (const bvid of bvids) {

        // sendMessageToContentScript({
        //     cmd: 'fetchData',
        //     val: `https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`
        // }, async function (json_obj) {
        //     console.log('来自content的回复：', bvid);
        //     await tb_bvids.insertOne({bvid, json_obj})
        // });
    }
    console.log(new Date())
}

export {
    vlist2bvids,
};
