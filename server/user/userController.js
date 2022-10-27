import UserService from "./userService.js";

async function getAllUsers(req, res) {
    try {
        const data = await UserService.getAllUsers()
        return res.status(200).json(data);
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

async function getUserById(req, res) {
    try {
        console.log(req.query)
        const {googleId} = req.query
        const data = await UserService.getUserById(googleId)
        return res.status(200).json(data);
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

async function getLoggedInUser(req, res) {

    try {
        const data = await UserService.getLoggedInUser(req.user);
        return res.status(200).json(data);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

async function updateUser(req, res) {
    try {
        console.log(req.body)
        const data = await UserService.updatedUser(req.body)
        return res.status(200).json(data);
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

async function registerUser(req, res) {
    try {
        const user = req.user
        const data = await UserService.registerUser({googleId: user.id, nickName: user.displayName})
        return res.status(200).json(data);
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

export default {getAllUsers, getUserById, updateUser, getLoggedInUser, registerUser}