import Message from "./messageModel.js";


async function getMessagesBySessionId(query){
        return Message.find(query);
}

async function createMessage(query){
        const message = new Message(query);
        return await message.save();
}

export default {getMessagesBySessionId, createMessage};