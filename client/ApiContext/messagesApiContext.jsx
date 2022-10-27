import React from "react";
import {postJSON} from "../lib/postJSON";
import {fetchJSON} from "../lib/fetchJSON";

export const MessagesApiContext = React.createContext({

    async listMessagesById(chatId) {
        return await fetchJSON("/api/message?"+ new URLSearchParams(chatId));
    },

    async createMessage(query){
        return await postJSON("/api/message", query)
    },



});