import mongoose from "mongoose";

mongoose.connect(`mongodb://localhost:${process.env.DB}`);

const db = mongoose.connection;

db.once("open", () => console.log("✅ Connected on DB"));
db.on("error", (error) => console.log(`❌ Error on DB ${error}`));
