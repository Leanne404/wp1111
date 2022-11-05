import mongoose from 'mongoose';
import dotenv from 'dotenv-defaults';
export default {
    connect: () =>{
        const db = mongoose.connection;
        db.on("error", (err) => console.log(err));
    }
}