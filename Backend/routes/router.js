import express from "express"
import { create, getAll, getOne, login,  registerUser, sendOTP,verifyOTP } from "../components/userComp.js"

const router = express.Router()

router.post("/create", create);
router.post("/login", login);

router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post("/register", registerUser);
router.get("/getall", getAll);
router.get("/getone/:id",getOne)

export default router