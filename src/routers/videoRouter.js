import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:(\\d+)", see);
videoRouter.get("/:(\\d+)/edit", edit);
videoRouter.get("/:(\\d+)/delete", deleteVideo);

export default videoRouter;
