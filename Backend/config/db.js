import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const URL = process.env.URL;
const db = () => {
    mongoose.connect(URL)
        .then(() => {
            console.log("Db connected Successfully")
        })
        .catch((err) => {
        console.log(err)
    })
}
export default db;