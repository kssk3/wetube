import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
    console.log(`someone is going to: ${req.url}`);
    next();
};

const handleHome = (req, res) => {
    return res.send("I love middleware");
};

app.get("/", gossipMiddleware, handleHome);
//* get에서 url에 요청를 하고 req와 res의 사이에 middleware가 응답 후 다음 함수인 handleHome을 호출함 */

const handleListening = () =>
    console.log(`✅Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
