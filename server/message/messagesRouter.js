import {Router} from "express";
import MessagesController from "./messagesController.js";


const router = Router();

router.get("/", MessagesController.getMessagesBySessionId)
router.post("/", MessagesController.createMessage)

export default router;