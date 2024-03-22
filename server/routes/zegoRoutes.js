import express from "express";
import { authorizeTeacher, isAuthenticated } from "../middlewares/auth.js";
import { getZegoToken } from "../controllers/zegoController.js";

const router = express.Router();

router.route("/getToken/access_token").get(getZegoToken);

export default router;
