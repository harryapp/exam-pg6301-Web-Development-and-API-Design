import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({

    sentBy:
        {
            type: String,
            required: true
        },
    message:
        {
            type: String,
            required: true
        },
    chatId:
        {
            type: String,
            required: true
        },
    dateCreated: {
        type: Date,
        default: Date.now
    }

});

export default mongoose.model("Message", messageSchema, "messages");