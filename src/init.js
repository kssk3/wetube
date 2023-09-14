import "regenerator-runtime";
import "dotenv/config";
// require("dotenv").config();를 import 방식으로 변경할 경우 코드
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
    console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
