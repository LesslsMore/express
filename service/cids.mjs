import {tb_cids} from "../db/conn.mjs";
async function get_cids_items(body) {
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
export {
    get_cids_items,
};
