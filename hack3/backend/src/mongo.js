import mongoose from "mongoose";
import { dataInit } from "./upload.js";

import "dotenv-defaults/config.js";

mongoose.set("strictQuery", true);

async function connect() {
  // TODO 1 Connect to your MongoDB and call dataInit()
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const mongo = mongoose.connection
  const port = process.env.port || 5000

  mongo.once('open', () => {
    console.log('mongodb connected')
    dataInit()
  })
  // TODO 1 End
}

export default { connect };
