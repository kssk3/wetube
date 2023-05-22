import express from "express";

const PORT = 4000;

const app = express();

const longger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const handleHome = (req, res) => {
    return res.send("I love middleware");
};

app.get("/", longger, handleHome);

const handleListening = () =>
    console.log(`✅Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
