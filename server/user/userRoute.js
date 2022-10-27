import {Router} from "express";
import UserController from "./userController.js";

const router = Router();

router.get("/all", UserController.getAllUsers)
router.get("/", UserController.getUserById)
router.get("/login", UserController.getLoggedInUser);
router.put("/", UserController.updateUser)
router.post("/register", UserController.registerUser)


export default router;