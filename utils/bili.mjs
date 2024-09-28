function bvid2cids(obj) {
    const bvid = obj.data.bvid
    // https://www.bilibili.com/video/BV19K4y1L7MT?p=57
    let item_info = []
    obj.data.pages.forEach(el => {
        let url = `https://www.bilibili.com/video/${bvid}?p=${el.page}`
        let hyperlink = `https://www.bilibili.com/video/${bvid}`
        // console.log(url)
        // console.log(el.part)
        let title = {text:obj.data.title, hyperlink}
        let mid = obj.data.owner.mid
        let name = obj.data.owner.name
        let view = obj.data.stat.view

        let page = el.page
        let cid = el.cid
        let part = {text: el.part, hyperlink: url}
        let duration = new Date(el.duration  * 1000).toISOString().substr(11, 8)

        item_info.push({
            name,
            title,
            part,
            page,
            view,
            duration,

            mid,
            bvid,
            cid,
            url,
        })
    })
    return item_info
}


export {
    bvid2cids,
}
