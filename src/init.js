import app from "./app";
import "./db";
import "./models/User";
import "./models/Video";
import "./models/Comment";

const handleListen = () =>
  console.log(`✅ Listening: http://localhost:${process.env.PORT}`);

app.listen(process.env.PORT, handleListen);
