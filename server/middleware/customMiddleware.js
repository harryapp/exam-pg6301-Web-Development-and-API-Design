
import User from "../user/userModel.js";


export const isAuthenticated = async (req, res, next) => {

    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
};

export const hasAccount = async (req, res, next) => {

    if (!req.user) {
        return res.sendStatus(401);
    }

    const user = await User.find({ googleId: req.user.id });
    if (user.length === 0)
        return res.sendStatus(401);

    if (user.length !== 0 && req.user.id === user[0].googleId) {
        next();
    } else {
        res.redirect("/auth/login");
    }
};

export default {
    isLoggedIn: isAuthenticated,
    hasAccount,
};