import MessageService from "./messageService.js";


async function getMessagesBySessionId(req, res) {

    try {
        const {chatId} = req.query
        const data = await MessageService.getMessagesBySessionId({chatId})
        return res.status(200).json(data);
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

async function createMessage(req, res) {
    try {
            console.log("d")
        const newMessageDto = {}
        newMessageDto.sentBy = req.body.sentBy
        newMessageDto.message = req.body.message
        newMessageDto.chatId = req.body.chatId




        const data = await MessageService.createMessage(req.body)
        return res.status(201).json(data);
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}


export default {getMessagesBySessionId, createMessage}