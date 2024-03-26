import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { getZegoToken } from "../controllers/zegoController.js";

const router = express.Router();

router.route("/getAccessToken").get(isAuthenticated, getZegoToken);

export default router;
