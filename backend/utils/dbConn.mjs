import mongoose from "mongoose";

async function dbConn() {
  try {
    const conn = await mongoose.connect(process.env.LOCAL_DB);
    if (conn) {
      console.log("database is connected");
    } else {
      console.log("db is not connected");
    }
  } catch (error) {
    console.log(error);
  }
}
export default dbConn;
