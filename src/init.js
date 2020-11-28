import app from "./app";
import "./db";

const handleListen = () =>
  console.log(`✅ Listening: http://localhost:${process.env.PORT}`);

app.listen(process.env.PORT, handleListen);
