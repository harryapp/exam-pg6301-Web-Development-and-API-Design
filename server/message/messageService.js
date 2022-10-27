import MessageRepo from "./messageRepo.js";

async function getMessagesBySessionId(sessionId) {
    try {
        return await MessageRepo.getMessagesBySessionId(sessionId);
    } catch (e) {
        throw Error(e);
    }
}

async function createMessage(data) {
    try {
        return await MessageRepo.createMessage(data);
    } catch (e) {
        throw Error(e);
    }
}

export default {getMessagesBySessionId, createMessage};