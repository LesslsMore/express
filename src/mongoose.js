const mongoose = require('mongoose');
const {readFile} = require("fs");

const uri = process.env.MONGO_URL;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });

        // 定义 MongoDB 模型
        const friendSchema = new mongoose.Schema({
            name: String,
            age: Number
        });
        const Friend = mongoose.model('Friend', friendSchema);

// 读取并解析 JSON 文件
        readFile('backup.json', 'utf8', (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }

            const jsonData = JSON.parse(data);

            // 将数据插入到 MongoDB
            Friend.insertMany(jsonData.friends) // 这里假设 JSON 文件中的数据保存在 "friends" 键下
                .then(() => console.log("Data successfully imported into MongoDB"))
                .catch(err => console.error("Error importing data:", err));
        });


        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}
run().catch(console.dir);
