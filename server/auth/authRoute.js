import {Router} from "express";
import passport from "passport";
import AuthController from "./authController.js";
import {config} from "../config/constants.js";

const CLIENT_URL = config.url.BASE_URL;

const router = Router();


router.get("/login/success", AuthController.loginSuccess)

router.get("/login/failed", AuthController.loginFailed)

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);


router.get("/microsoft", passport.authenticate("microsoft", { scope: ["profile"] }));

router.get(
    "/auth/microsoft",
    passport.authenticate("microsoft", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);




export default router;