import express from "express";
import { protectedRoute } from "../middlewares/auth.middleware.js";
import { getUsersForSideBare,getMessages , sendMessage } from "../controllers/message.controller.js";
const router = express.Router();

router.get('/users', protectedRoute,getUsersForSideBare);
router.get('/:id', protectedRoute,getMessages);
router.get("/send/:id", protectedRoute , sendMessage)
export default router ;