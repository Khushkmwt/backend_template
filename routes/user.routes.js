import { Router } from "express";
import { registerUser } from "../controllers/user.controllers";

const router = Router();
router.post("/register", registerUser);
// You can add more user-related routes here, such as login, logout, etc.
// Example: router.post("/login", loginUser);

//another way to define routes
router.route("/register").post(registerUser);


export default router;
// This file is currently empty, but you can add your user-related routes here.