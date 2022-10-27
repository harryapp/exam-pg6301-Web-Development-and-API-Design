import UserRepo from "./userRepo.js";

async function getAllUsers() {
    return await UserRepo.getAllUsers();
}

async function getUserById(id) {
    console.log(id)
    const user = await UserRepo.getUserById(id)
    return user[0];
}

async function getLoggedInUser(googleUser) {
    try {

        if (googleUser === undefined)
            return null;

        if (googleUser.id === undefined)
            return null;
        console.log(googleUser.id)
        const userFromDb = await UserRepo.getUserById({ googleId: googleUser.id });

        if (userFromDb.length === 0)
            return null;

        return userFromDb[0];
    } catch (e) {
        throw Error();
    }
}

async function updatedUser(query) {
    return await UserRepo.updateUser(query)
}

async function registerUser(query) {
    return await UserRepo.registerUser(query)
}

export default {getAllUsers, getUserById, updatedUser, getLoggedInUser, registerUser};