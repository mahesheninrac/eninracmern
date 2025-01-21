const Article = require("./model/articleModel")
const articles = require("./data")
const connectDB = require('./config/db');

connectDB()

const importData = async () => {
    try {
        await Article.deleteMany();
        await Article.insertMany(articles)
        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.log(`${error}`);
        process.exit(1)
    }
}
importData();