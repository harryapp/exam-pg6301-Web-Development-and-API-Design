import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    googleId:
        {
            type: String,
            unique: true
        },
    nickName:
        {
            type: String,
            unique: true
        },
    bio: String
});

export default mongoose.model("User", userSchema, "users");