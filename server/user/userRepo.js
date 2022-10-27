import User from "./userModel.js";


async function getAllUsers(){
        return User.find();
}

async function getUserById(id){
    return User.find(id);
}

async function updateUser(query){
    console.log(query.googleId)
    const data = await User.findOneAndUpdate({googleId: query.googleId}, {nickName: query.nickName, bio: query.bio});

    return data
}

async function registerUser(query){
    const data = await new User(query);

    return data.save();
}

export default {getAllUsers, getUserById, updateUser, registerUser};