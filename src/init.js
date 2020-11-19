import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const handleListen = () =>
  console.log(`✅ Listening: http://localhost:${process.env.PORT}`);

app.listen(process.env.PORT, handleListen);
