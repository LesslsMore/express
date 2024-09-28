import {tb_pages, tb_vlist} from "../db/conn.mjs";

async function pages2vlist() {
    console.log('pages2vlist...')
    console.log(new Date())
    for (let tb_page of tb_pages) {
        let pages = await tb_page.find({}).toArray()
        console.log(pages)
        for (let {json_obj} of pages) {
            // console.log(json_obj)
            // console.log(db_bili)
            await tb_vlist.insertMany(json_obj.data.list.vlist)
        }
    }
    console.log(new Date())
}


export {
    pages2vlist,
};
